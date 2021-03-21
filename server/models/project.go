package models

import "time"

type Project struct {
	ID				string		`json:"id"`
	Name			string		`json:"name"`
	Description		string		`json:"description"`
	Languages		[]string	`json:"languages"`
	Frameworks		[]string	`json:"frameworks"`
	GithubUrl		*string		`json:"githubUrl"`
	ProjectUrl		*string		`json:"projectUrl"`
	CreatedAt		*time.Time	`json:"createdAt"`
	UpdatedAt		*time.Time	`json:"updatedAt"`
}
