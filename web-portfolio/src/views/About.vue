<template>
    <div class="about-wrapper">
        <div class="age-box">
            Currently
            <span class="highlighted-text">{{dateObj.years}}</span> years
            <span class="highlighted-text">{{dateObj.months}}</span> months
            <span class="highlighted-text">{{dateObj.days}}</span> days
             old.
        </div>
        <div class="card-about-wrapper">
            <div class="front-about">
                <h1 class="card-about-title">
                    Welcome to my web portfolio!
                </h1>
                <p>
                    My name is <span class="highlighted-text">Marcello</span> and I am a 
                    <span class="highlighted-text">Frontend Developer</span>
                    located in Rome.
                </p>
                <p>
                    Since i wrote my first line of code I absolutely get in love with it, I really enjoy challenging tasks and why not maybe solve them sometimes.
                    <br>Currently my main goal is to become a <span class="highlighted-text">Full Stack Developer</span>.
                </p>
                <p>
                    I describe my self as a 
                    <span class="highlighted-text">dynamic</span>, 
                    <span class="highlighted-text">eclectic</span>,
                    <span class="highlighted-text">positive</span> person.
                    <br>I believe that the consistency towards 
                    <span class="highlighted-text">self imporvement</span>
                    is the key of <span class="highlighted-text">happiness</span>.
                </p>
            </div>
            <div class="back-about">
                <h1 class="card-about-title">
                    While I'm not programming
                </h1>
                <p>
                    In my free time i like to 
                    <span class="highlighted-text">read</span> 
                    classic books and personal growth books, I'm planning to write a book in the future.
                </p>
                <p>
                    I got a strong passion for 
                    <span class="highlighted-text">music</span>,
                    <span class="highlighted-text">movies</span> and
                    <span class="highlighted-text">videogames</span>,
                    I'm also interested about sectors as 
                    <span class='highlighted-text'>finance</span>,
                    <span class='highlighted-text'>chess</span> and
                    <span class='highlighted-text'>gastronomy</span>.
                </p>
                <p>
                    Talking about sports I enjoy watching 
                    <span class="highlighted-text">soccer</span> and
                    <span class="highlighted-text">basket</span>, but recently I got very caught by 
                    <span class="highlighted-text">F1</span>!
                    
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        data(){
            return {
                birthday: new Date('11/23/1996'),
                dateObj: {
                    years: '',
                    months: '',
                    days: ''
                }
            }
        },
        mounted(){
            this.renderDate(this.birthday)
        },
        methods: {
            renderDate(birthday){
                this.dateObj.years =  moment.duration(moment().diff(birthday)).years()
                this.dateObj.months =  moment.duration(moment().diff(birthday)).months()
                this.dateObj.days =  moment.duration(moment().diff(birthday)).days()
            }
        }
    
    }

</script>