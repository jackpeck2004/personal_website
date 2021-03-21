package main

import (
	"log"
	"net/http"
	"database/sql"

	"./models"

	"github.com/gorilla/mux"
	_ "github.com/go-sql-driver/mysql"

)

var projects []models.Project

var db *sql.DB


func main() {
	r := mux.NewRouter()
	var err error

	db, err = dbConnection()

	if err != nil {
		log.Fatalf("Error %s when getting the connection", err)
		return
	}

	log.Println("Connected to MySql")

	defer db.Close()

	err = createProjectsTable(db)

	if err != nil {
		log.Fatalf("createProjectsTable failed with error: %s", err)
		return 
	}


	r.HandleFunc("/projects", getProjects).Methods("GET")
	r.HandleFunc("/project/{id}", getProject).Methods("GET")

	log.Printf("Server Listening on port 8000...")
	log.Fatal(http.ListenAndServe(":8000", r))
}