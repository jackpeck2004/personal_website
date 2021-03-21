package main

import (
	"fmt"
	"database/sql"
	"log"
)

const (  
    username = "jackpeck"
    password = "Lego2004"
    hostname = "localhost"
    dbname   = "test"
)

func dsn(dbName string) string {  
    return fmt.Sprintf("%s:%s@tcp(%s)/%s?parseTime=true", username, password, hostname, dbName)
}

func dbConnection() (*sql.DB, error) {
	db, err := sql.Open("mysql", dsn(dbname))

	if err != nil {
		log.Fatal("Unable to open connection to db")
		return nil, err
	}

	return db, nil
}

func createProjectsTable(db *sql.DB) error {  
    query := `CREATE TABLE IF NOT EXISTS projects(
		id int primary key auto_increment,
		name varchar(255) not null,
		description text NOT NULL, 
        languages varchar(255) NOT NULL,
		frameworks varchar(255) NOT NULL,
		githubUrl varchar(255),
		projectUrl varchar(255),
		created_at datetime default CURRENT_TIMESTAMP NOT NULL,
		updated_at datetime default CURRENT_TIMESTAMP NOT NULL
		)`

	_, err := db.Query(query)

	if err != nil {
        log.Printf("Error %s when creating projects table", err)
        return err
	}

	return nil
}