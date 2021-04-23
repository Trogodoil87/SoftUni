function solve(input) {
    let courses = {};
    for (let i = 0; i < input.length; i++) {
        let pattern = /((?<courseName>[A-Za-z0-9#]+): (?<count>[0-9]+))/gm;
        let course = pattern.exec(input[i]);

        if (course) {
            if (!courses.hasOwnProperty(course.groups.courseName)) {
                courses[course.groups.courseName] = {
                    count: 0,
                    users: {}
                };
            }

            courses[course.groups.courseName].count += Number(course.groups.count);
            input.splice(i, 1);
            i -= 1;
        }
    }

    while (input.length > 0) {
        let [userProps, ...args] = input.shift().split(' ');
        let pattern = /((?<userName>[A-Za-z0-9]+)\[(?<credits>\d+)\])/gm;
        let tokens = pattern.exec(userProps);

        let user = tokens.groups.userName;
        let score = Number(tokens.groups.credits);
        let mail = args[2];
        let course = args[4];

        if (courses.hasOwnProperty(course) && courses[course].count !== 0) {
            courses[course].count -= 1;
            courses[course].users[score] = {
                user,
                mail
            };
        }
    }
    Object.entries(courses).sort((a, b) => Object.keys(b[1].users).length - Object.keys(a[1].users).length).forEach(ele => {
        console.log(`${ele[0]}: ${ele[1].count} places left`);
        Object.entries(ele[1].users).sort((a, b) => b[0] - a[0]).forEach(ele => {
            console.log(`--- ${ele[0]}: ${ele[1].user}, ${ele[1].mail}`);
        })
    })
}

solve(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']);