package models

import (
	"time"
	"database/sql"
)

type Project struct {
	ID				string			`json:"id"`
	Name			string			`json:"name"`
	Description		string			`json:"description"`
	Languages		[]string		`json:"languages"`
	Frameworks		[]string		`json:"frameworks"`
	GithubUrl		sql.NullString	`json:"githubUrl"`
	ProjectUrl		sql.NullString	`json:"projectUrl"`
	CreatedAt		*time.Time		`json:"createdAt"`
	UpdatedAt		*time.Time		`json:"updatedAt"`
}
