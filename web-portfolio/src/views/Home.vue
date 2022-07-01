
<template>
    <div class="home-wrapper">
        <video autoplay muted loop class="back-video">
            <source src="/images/home-back.mp4" type="video/mp4">
        </video>
        <div class="home-text-box">
            <span 
                v-for='letter in welcomeArr' 
                :key="letter"  
                class="letter">
               {{letter}}<br>
            </span>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            welcomeText: "HI I'M MARCELLO WEB DEVELOPER",
            welcomeArr: []
        }
    }, 
    mounted(){
        this.renderString()
        console.log(this.welcomeArr);
    },
    methods: {
        renderString(){
            this.welcomeArr = this.welcomeText.split(" ")

        }
    }
}
</script>