package main

import (
	"fmt"
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"database/sql"
	"strconv"
	"./models"
	"log"
	"strings"
	"time"
)

func rowToProject(row *sql.Rows) (models.Project, error) {
	var (
		id int
		name string
		description string
		languages string
		frameworks string
		githubUrl *string
		projectUrl *string
		createdAt *time.Time
		updatedAt *time.Time
	)

	err := row.Scan(
		&id,
		&name,
		&description,
		&languages,
		&frameworks,
		&githubUrl,
		&projectUrl,
		&createdAt,
		&updatedAt,
	)

	if err != nil {
		log.Fatalf("Error when converting query to project: %s", err)
		return models.Project{}, err
	}

	project := models.Project{
		ID: strconv.Itoa(id),
		Name: name,
		Description: description,
		Languages: strings.Split(languages, ", "),
		Frameworks: strings.Split(frameworks, ", "),
		GithubUrl: githubUrl,
		ProjectUrl: projectUrl,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}

	return project, nil
}

func getProjects(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	res, err := db.Query("select * from projects")

	if err != nil {
		log.Fatalf("Error when running query: %s", err)
		return
	}

	var projects []models.Project

	for res.Next() {

		var project models.Project

		project, err = rowToProject(res)

		if err != nil {
			log.Fatal("Unable to parse row:", err)
			return
		}

		projects = append(projects, project)
	}
	json.NewEncoder(w).Encode(projects)
	// json.NewEncoder(w).Encode(res)
}

func getProject(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	params := mux.Vars(r)

	query := fmt.Sprintf("select * from projects where id = %s", params["id"])

	var (
		id int
		name string
		description string
		languages string
		frameworks string
		githubUrl *string
		projectUrl *string
		createdAt *time.Time
		updatedAt *time.Time
	)

	err := db.QueryRow(query).Scan(
		&id,
		&name,
		&description,
		&languages,
		&frameworks,
		&githubUrl,
		&projectUrl,
		&createdAt,
		&updatedAt,
	)

	if err != nil {
		log.Printf("Error when running query: %s", err)
		encoder.Encode(&models.Project{})
		return
	} 

	project := models.Project{
		ID: strconv.Itoa(id),
		Name: name,
		Description: description,
		Languages: strings.Split(languages, ", "),
		Frameworks: strings.Split(frameworks, ", "),
		GithubUrl: githubUrl,
		ProjectUrl: projectUrl,
		CreatedAt: createdAt,
		UpdatedAt: updatedAt,
	}


	encoder.Encode(project)

}
