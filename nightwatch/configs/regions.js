const regions = [
    {
        id: "research.kidsloop.live",
        name: "R&D Korea",
        domain: "research.kidsloop.live",
        services: {
            hub: "https://hub.research.kidsloop.live",
            auth: "https://auth.research.kidsloop.live",
            live: "https://live.research.kidsloop.live",
        },
        teachers: [
            {
                username: "qa+stress_t1@calmid.com", 
                password: "Aaa12345", 
                profile: "Teacher 1 Report", 
            },
            {
                username: "qa+stress_t2@calmid.com", 
                password: "Aaa12345", 
                profile: "Teacher 2 Report",
            }
        ],
        students: [
            {
                username: "qa+stress_01@calmid.com", 
                password: "Aaa12345", 
                profile: "Student 1 Report"
            },
            {
                username: "qa+stress_02@calmid.com", 
                password: "Aaa12345", 
                profile: "Student 2 Report"
            }
        ],
    },
    {
        id: "alpha.kidsloop.net",
        name: "Live Alpha",
        services: {
            hub: "https://hub.alpha.kidsloop.net",
            auth: "https://auth.alpha.kidsloop.net",
            live: "https://live.alpha.kidsloop.net",
        },
        teachers: [
            {username: "qa1+teacher1@calmid.com", password: "Abc012345", profile: "Teacher 1 t1"},
            {username: "qa1+teacher2@calmid.com", password: "Abc012345", profile: "Teacher 2 t2"}
        ],
        students: [
            {username: "qa1+student1@calmid.com", password: "Abc012345", profile: "Student 1 1"},
            {username: "qa1+student2@calmid.com", password: "Abc012345", profile: "Student 2 2"}
        ],
    },
    {
        id: "kidsloop.in",
        name: "Live Alpha",
        services: {
            hub: "https://hub.kidsloop.in",
            auth: "https://auth.kidsloop.in",
            live: "https://live.kidsloop.in",
        },
        teachers: [
            {username: "qa+report@calmid.com", password: "Aaa12345", profile: "QA Miracle Squad"},
        ],
        students: [
        ],
    },
];

module.exports = { regions };