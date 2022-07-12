
<template>
    <div class="skill-wrapper">
        
        <div class="job-skill">
            <div class="skill-title-box">
                <h1>Job skills</h1>
            </div>
            <div class="skill-box" v-for="skill in skills" :key="skill">
                <h5>{{skill.title}}</h5>
                <div class="rating-box">
                    <div v-for="point in skill.rate" :key='point' class="point"></div>
                    <div v-for="back in 5 - skill.rate" :key="back" class="grey-point"></div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>

export default {
    data(){
        return {
            skills: {
                html: {
                    title: 'HTML / CSS',
                    rate: 5
                }, 
                javascript: {
                    title: 'Javascript', 
                    rate: 4
                }, 
                angular: {
                    title: 'Angular',
                    rate: 3
                }, 
                vuejs: {
                    title: 'Vue.js', 
                    rate: 3
                }, 
                nodejs: {
                    title: 'Node.js / Express',
                    rate: 3
                }, 
                mysql: {
                    title: 'Mysql', 
                    rate: 3
                }, 
                uxui:{
                    title: 'UX/UI',
                    rate: 4
                }


            }
        }
    }
 
}
</script>