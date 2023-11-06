{
    // 
    // Constraints in typescript
    const addCourseToStudent = <T extends {id:number,name:string,email:string}>(studentInfo: T) => {
        const courseName = "Next Level Web Developer";

        return {
            ...studentInfo,
            courseName
        }
    }


// T extends {id:number,name:string,email:string}
    const student3 = addCourseToStudent({
        id:25465354,
        name:"Mr. Z",
        email:"Z@gmail.com",
        another:"dummy"
    })


    type Student1 = {
        id:number,
        name: string,
        email: string,
        devType: string
    }


    interface Student2 {
        id:number,
        name: string,
        email: string,
        devType: string,
        hasWatch: string
    }

    const student1 = addCourseToStudent<Student1>({
        id:52454,
        name: "oliullah",
        email: "mdolihasan@gmail.com",
        devType: "Next Level Developer"
    })
    const student2 = addCourseToStudent<Student2>({
        id:54365465846584,
        name: "Maruf",
        email: "mdolihasan@gmail.com",
        devType: "Next Level Developer",
        hasWatch: "apple watch"
    })































    // 
}