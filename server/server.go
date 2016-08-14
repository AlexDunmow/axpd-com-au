package main

import (
	"fmt"
	"github.com/blockninja/ninjarouter"
	"net/http"
)

func Serve(h http.Handler) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		h.ServeHTTP(w, r)
	})
}

func test(w http.ResponseWriter, r *http.Request) {

	w.Write([]byte("hello there"))
}

func main() {
	rtr := ninjarouter.New()
	rtr.GET("/test", test)
	rtr.GET("/*", Serve(http.FileServer(http.Dir("../public/build"))))
	fmt.Println("Listening on port 9000...")
	if err := rtr.Listen(":9000"); err != nil {
		panic(err)
	}
}

func checkErr(w http.ResponseWriter, err error) {
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		panic(err)
	}
}
