-- 1. Create a database named `portfolio`

CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags",
    "github_repo_name" varchar(2048),
    "total_commits" integer, 
    "personal_commits" integer,
);

INSERT INTO "projects" ("name", "description", "thumbnail", "github", "date_completed", "github_repo_name")
	VALUES ('Gallery App', 
            'This is my first CRUD react app.  It shares photos from my life, allows 
            users to like them, and has a form for uploading more pictures.', 
            '/images/running-app.png', 
            'https://github.com/adunahee/react-gallery-app', 
            '01/25/2019', 
            'react-gallery-app');
           
INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "github_repo_name")
    VALUES ('Feedback App', 
            'This is my second CRUD react app, which uses redux and react-router.  
            It keeps track of user progress through the survey and once they have 
            finished all parts allows them to submit it to the server.  
            There is also an admin view that feedback to be flagged or deleted 
            with some styling and confirmation windows.',
            '/images/feedback-app.png',
            'https://peaceful-ridge-23540.herokuapp.com/#/ongoing/feeling',
            'https://github.com/adunahee/react-redux-feedback-app',
            '01/29/2019',
            'react-redux-feedback-app');
