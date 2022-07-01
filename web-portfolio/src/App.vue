

<template>

  <div class="app-wrapper">
    <div class="cursor" :style="cursor"></div>
    <aside>
      <app-side></app-side>
    </aside>
    <main>
        <RouterView />
    </main>

    


  </div>

</template>
<script>
 export default {
  data(){
    return {
        cursor: {
          top: 0,
          left: 0,
          border: ''
        } 
    }
  },
  mounted(){
    document.addEventListener('mousemove', (e) => {
      this.cursor.top = e.pageY - 15 +'px'
      this.cursor.left = e.pageX - 17 + 'px'
      e.pageX >= window.innerWidth - 12 ? this.cursor.border = 'none' : this.cursor.border = ''
    })
  }
 }

</script>


