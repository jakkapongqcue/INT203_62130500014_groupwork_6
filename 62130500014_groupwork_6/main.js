const constraints = {
    username: {
        presence: {
            message: " is required"
        },
        length: {
            minimum: 5,
            message: "must be at least 5 digits"
        },
    },
    firstname: {
        presence: {
            message: " is required"
        },
    },
    lastname: {
        presence: {
            message: " is required"
        },
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150,
            greaterThan: 0
        }
    },
    gender: {
        presence: {
            message: " is required"
        },
    },
    email: {
        presence: {
            message: " is required"
        },
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    chosensubject: {
        presence: {
            message: " is required"
        },
    }
}

const app = Vue.createApp({
    data() {
        return {
            img: 'images/profile.jpg',
            username: null,
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            chosensubject: null,
            subject_lists: [{
                    subject_id: 1,
                    subject_name: 'Intro to Vue 3'
                },
                {
                    subject_id: 2,
                    subject_name: 'Vue 3 Forms'
                },
                {
                    subject_id: 3,
                    subject_name: 'Vue 3 Reactivity'
                }
            ],
            errors: "",
        }
    },
    methods: {
        checkForm() {
            let condition = {
                username: this.username,
                firstname: this.firstname,
                lastname: this.lastname,
                age: this.age,
                gender: this.gender,
                email: this.email,
                phone: this.phone,
                chosensubject: this.chosensubject
            }
            this.errors = validate(condition, constraints)
            if (!this.errors) {
                Swal.fire(
                    "Success!",
                    "Your Profile is updated successfully.",
                    "success",
                );
            }
        }
    },
})