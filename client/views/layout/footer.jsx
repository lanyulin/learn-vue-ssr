import '../../assets/styles/footer.less'

export default {
  data () {
    return {
      author: 'lanmao'
    }
  },
  render () {
    return (
      <div id='footer'>
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
