const projectsData = [];

const feedbackApp = {
    date_completed: "2019-01-29T06:00:00.000Z",
    description: `This is my second CRUD react app, 
        which uses redux and react-router. It keeps track of user progress 
        through the survey and once they have finished 
        all parts allows them to submit it to the server.  
        There is also an admin view that feedback to be flagged or 
        deleted with some styling and confirmation windows.`,
    github: "https://github.com/adunahee/react-redux-feedback-app",
    id: 2,
    project_name: "Feedback App",
    tag_name: ["#React-Redux"],
    thumbnail: "/images/feedback-app.png",
    website: "https://peaceful-ridge-23540.herokuapp.com/#/"
};

const galleryApp = {
    date_completed: "2019-01-25T06:00:00.000Z",
    description: `This is my first CRUD react app.  It shares photos 
        from my life, allows users to like them, and has a form 
        for uploading more pictures.`,
    github: "https://github.com/adunahee/react-gallery-app",
    id: 1,
    project_name: "Gallery App",
    tag_name: ["#postgreSQL", "#materialUI", '#react.js'],
    thumbnail: "/images/running-app.png",
    website: null
};

const calculatorApp = {
    date_completed: "2019-01-11T06:00:00.000Z",
    description: `This is the second app I ever wrote.  I use jQuery 
        to update the page and the server holds the data for this 
        simple calculator.`,
    github: "https://github.com/adunahee/weekendChallenge2",
    id: 3,
    project_name: "Calculator",
    tag_name: ["#jQuery", "#node.js", "#ajax", '#HTML'],
    thumbnail: "/images/calculator-app.png",
    website: 'https://protected-wildwood-77713.herokuapp.com/'
}

const kitcheNexus = {
    date_completed: "2019-02-28T06:00:00.000Z",
    description: `This is my first solo project ever.  I created wireframes, ERDs, 
        and scoped it before creating.  I enjoyed thinking through user experience
        when creating features and bug hunting. I look forward to adding more 
        features in the future!`,
    github: "https://github.com/adunahee/solo-project-kitcheNexus",
    id: 4,
    project_name: "Solo Project KitcheNexus",
    tag_name: ["#react.js", "#node.js", "passport", "#postgreSQL", 'material-ui',
    '#responsive'],
    thumbnail: "/images/kitcheNexus-welcome.png",
    website: 'https://kitchenexus.herokuapp.com/#/home'
}

projectsData.push(kitcheNexus);
projectsData.push(feedbackApp);
projectsData.push(galleryApp);
projectsData.push(calculatorApp);

export default projectsData;