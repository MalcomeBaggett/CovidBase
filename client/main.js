const app = new Vue({
    el: '#container',
    data: {
        oklahomaData: null,
    },
    mounted() {
        axios.get('https://covidtracking.com/api/v1/states/ok/daily.json').then(res => this.oklahomaData = res)
    }
})