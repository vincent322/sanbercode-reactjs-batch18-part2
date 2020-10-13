import React, {Component} from "react"

class UpdtBuah extends Component{

 constructor(props) {
    super(props)
    this.state = {
      listBuah: [
        { name: "Semangka", price: 10000, weight: 1000 },
        { name: "Anggur", price: 40000, weight: 500 },
        { name: "Strawberry", price: 30000, weight: 400 },
        { name: "Jeruk", price: 30000, weight: 1000 },
        { name: "Mangga", price: 30000, weight: 500 },
      ],
      inputNmBuah: "",
      inputHrgBuah: "",
      inputBrtBuah: "",
      inputBuah: { name: "", price: "", weight: "" },
      index: -1
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(event) {
    let index = event.target.value
    this.state.listBuah.splice(index, 1)
    this.setState({ listBuah: this.state.listBuah })
  }

  handleEdit(event) {
    let index = event.target.value
    this.setState({ inputNmBuah: this.state.listBuah[index].name, inputHrgBuah: this.state.listBuah[index].price, inputBrtBuah: this.state.listBuah[index].weight, index })
  }

  handleChange(event) {
    if (event.target.id === "name") {
      this.setState({ inputNmBuah: event.target.value });
    } else if (event.target.id === "price") {
      this.setState({ inputHrgBuah: event.target.value });
    } else if (event.target.id === "weight") {
      this.setState({ inputBrtBuah: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let index = this.state.index
    let inputBuah = {
      name: this.state.inputNmBuah,
      price: this.state.inputHrgBuah,
      weight: this.state.inputBrtBuah
    }
    let listBuah = this.state.listBuah
    if (index === -1) {
      this.setState({
        inputBuah
      }, () => {
        this.setState({
          listBuah: [...this.state.listBuah, this.state.inputBuah],
          inputNmBuah: "",
          inputHrgBuah: "",
          inputBrtBuah: ""
        });
        console.log(this.state.inputBuah);
      });
    } else {
      listBuah[index] = inputBuah
      this.setState({ listBuah, inputNmBuah: "", inputHrgBuah: "", inputBrtBuah: "", index: -1 })
      console.log(inputBuah);
    }
  }

  render() {
    return (
      <>
        <h1>List Buah</h1>
        <table className="daftarBuah">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Weight</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.listBuah.map((val, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.weight / 1000} kg</td>
                    <td><button onClick={this.handleEdit} value={index}>Edit</button></td>
                    <td><button onClick={this.handleDelete} value={index}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <h1>Form Input</h1>
        <form className="input" onSubmit={this.handleSubmit}>
          <span>
          <label for="name">Name</label>
            <input type="text" id="name" value={this.state.inputNmBuah} onChange={this.handleChange} className="inputan" />
          </span>
          <span>
          <label for="price">Price</label>
            <input type="text" id="price" value={this.state.inputHrgBuah} onChange={this.handleChange} className="inputan" />
          </span>
          <span>
          <label for="weight">Weight</label>
            <input type="text" id="weight" value={this.state.inputBrtBuah} onChange={this.handleChange} className="inputan" />
          </span>
          <span><button>Submit</button></span>
        </form>
      </>
    )
  }
}

export default UpdtBuah