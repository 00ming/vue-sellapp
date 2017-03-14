<template >
  <div class="star" :class="starType">
    <span v-for="item in itemClass" :class="item" class="star-tiem"></span>
  </div>
</template>
<script type="text/javascript">
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'
  export default{
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size
      },
      itemClass () {
        let result = []
        let score = Math.floor(this.score * 2) / 2
        let hasDecimal = score % 1 === 0
        let integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON)
        }
        if (hasDecimal) {
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>
<style >
  .star{
    font-size: 0;
  }
  .star-48 .star-tiem{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
  .star-48 .on{
    background-image: url('star48_on@2x.png');
  }
  .star-48 .half{
    background-image: url('star48_half@2x.png');
  }
  .star-48 .half{
    background-image: url('star48_half@2x.png');
  }
  .star-36 .star-tiem{
    width: 15px;
    height: 15px;
    margin-right: 16px;
    background-size: 15px 15px;
  }
  .star-36 .on{
    background-image: url('star36_on@2x.png');
  }
  .star-36 .half{
    background-image: url('star36_half@2x.png');
  }
  .star-36 .half{
    background-image: url('star36_half@2x.png');
  }
  .star-24 .star-tiem{
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .star-36 .on{
    background-image: url('star24_on@2x.png');
  }
  .star-36 .half{
    background-image: url('star24_half@2x.png');
  }
  .star-36 .half{
    background-image: url('star24_half@2x.png');
  }
  .star .staritem{
    display: inline-block;
    background-repeat: no-repeat;
  }
</style>
