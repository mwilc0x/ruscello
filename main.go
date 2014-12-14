package main

import (
    "fmt"
    "os"
    "time"
    "log"
    "net/http"
    "github.com/darkhelmet/twitterstream"
    "github.com/googollee/go-socket.io"
)

func main() {
    fmt.Println("Consumer Key:", os.Getenv("TWITTER_CONSUMER_KEY"))
    fmt.Println("Consumer Secret:", os.Getenv("TWITTER_CONSUMER_SECRET"))
    fmt.Println("Access Token:", os.Getenv("TWITTER_ACCESS_TOKEN"))
    fmt.Println("Token Secret:", os.Getenv("TWITTER_TOKEN_SECRET"))

    server, err := socketio.NewServer(nil)
    if err != nil {
        log.Fatal(err)
    }
    server.On("connection", func(so socketio.Socket) {
        log.Println("user connected")

        go tweets()

        so.On("disconnection", func() {
            log.Println("user disconnected")
        })

    })
    server.On("error", func(so socketio.Socket, err error) {
        log.Println("error:", err)
    })

    http.Handle("/socket.io/", server)
    http.Handle("/", http.FileServer(http.Dir("./")))
    log.Println("Serving at localhost:8080...")
    http.ListenAndServe(":8080", nil)
}

func tweets() {
      client := twitterstream.NewClient(os.Getenv("TWITTER_CONSUMER_KEY"),
                                        os.Getenv("TWITTER_CONSUMER_SECRET"),
                                        os.Getenv("TWITTER_ACCESS_TOKEN"),
                                        os.Getenv("TWITTER_TOKEN_SECRET"))
    for {
        conn, err := client.Track("taylorswift13")
        if err != nil {
            log.Println("Tracking failed, sleeping for 1 minute")
            time.Sleep(1 * time.Minute)
            continue
        }

        decode(conn)
    }
}

func decode(conn *twitterstream.Connection) {
    for {
        if tweet, err := conn.Next(); err == nil {
            log.Println("%s said: %s", tweet.User.ScreenName, tweet.Text)
        } else {
            log.Printf("Failed decoding tweet: %s", err)
            return
        }
    }
}
