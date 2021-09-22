const Counter = 
{
    data() 
        {
      return { //return json obj
        "Being": 
        {

        },  // List of obj
        "BigImage":"",
        "fname":"",
        "lname":"",
        "origin":"",
        "age":"",
        "email":"",
        "MedImage": "",
        "birthday":""
        }
    },
    created() //called function to fetch
    {
        this.fetchUserData();
    },

    computed: //Data Manipulation
    {
        prettyBirthday()
        {
            return dayjs(this.birthday).format('D MMM YYYY');
        }
    },

    methods: 
    {
        fetchUserData()
        {
        fetch('https://randomuser.me/api/')
        .then(response => response.json()) //Get Promise
        
        .then(responseJSON => //define objs in data()
            {
            var user = responseJSON.results[0];
            this.fname = user.name.first;
            this.lname = user.name.last;
            this.origin = user.location.country;
            this.age = user.dob.age;
            this.email = user.email;
            this.BigImage = user.picture.large;
            this.MedImage = user.picture.medium;
            this.birthday = user.dob.date;
            console.log(user);
            })

        .catch((err) => 
        {
            console.error(err);
        })

        }
    }
}
Vue.createApp(Counter).mount('#testVueApp');