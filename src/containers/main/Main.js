import React, { Component } from "react";
import { styled, createTheme, ThemeProvider,  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useMediaQuery from '@mui/material/useMediaQuery';
import "bootstrap/dist/css/bootstrap.min.css";
import StorageUtils from '../../helpers/StorageUtils';


export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: "",
      contentes: "",
      status: "",
      startDate: "",
      endDate: "",
      commnent: "",
      action: "ADD TO DO LIST", //default ADD ITEM
      items: [
        {
          title: "demo1",
          contentes: "lam bai tap 1",
          status: "chua lam",
          startDate: "2021-02-07",
          endDate: "2021-02-08",
          commnent: "null",
        },
        {
          title: "demo2",
          contentes: "lam bai tap 2",
          status: "chua lam",
          startDate: "2021-02-07",
          endDate: "2021-02-08",
          commnent: "null",
        },
        {
          title: "demo3",
          contentes: "lam bai tap 3",
          status: "chua lam",
          startDate: "2021-02-07",
          endDate: "2021-02-08",
          commnent: "null",
        },
      ],
    };

    const data = this.state.items;

    // const str = JSON.stringify(data);
    // window.localStorage.setItem("datademo", str);
    // const str2 =  window.localStorage.getItem("data");
    // const data2 = JSON.parse(str2);
    // console.log("data2 = ", data2);
  }

  //function changetitle
  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  //function changecontentes
  changeContentes = (e) => {
    this.setState({
      contentes: e.target.value,
    });
  };

  changeStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  changestartDate = (e) => {
    this.setState({
      startDate: e.target.value,
    });
  };

  changeendDate = (e) => {
    this.setState({
      endDate: e.target.value,
    });
  };

  changeCommnent = (e) => {
    this.setState({
      commnent: e.target.value,
    });
  };

  //ADD ITEM
  addItem = () => {
    if (!this.state.items.find((item) => item.title === this.state.title)) {
      this.setState({
        items: [
          ...this.state.items,
          {
            title: this.state.title,
            contentes: this.state.contentes,
            status: this.state.status,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            commnent: this.state.commnent,
          },
        ],
        title: "",
        contentes: "",
        status: "",
        startDate: "",
        endDate: "",
        commnent: "",
      });
    } else {
      window.alert("Tiêu đề công việc đã có");
    }
    
  };

  //EDIT LIST
  editItem = (item, id) => {
    console.log(item);
    this.setState({
      id: id,
      title: item.title,
      contentes: item.contentes,
      status: item.status,
      startDate: item.startDate,
      endDate: item.endDate,
      commnent: item.commnent,
      action: "UPDATE ITEM",
    });
  };

  //UPDATE LIST
  updateItem = () => {
    let items = this.state.items;
    items.map((item, id) => {
      if (this.state.id === id) {
        item.title = this.state.title;
        item.contentes = this.state.contentes;
        item.status = this.state.status;
        item.startDate = this.state.startDate;
        item.endDate = this.state.endDate;
        item.commnent = this.state.commnent;
        // item.contentes = parseInt(this.state.contentes);
      }
    });

    //set update list
    this.setState({
      items: items,
      title: "",
      contentes: "",
      status: "",
      startDate: "",
      endDate: "",
      commnent: "",
      action: "ADD TO DO LIST",
    });
  };

  //DELETE LIST
  deleteItem = (title) =>
    this.setState({
      items: this.state.items.filter((item) => item.title != title),
    });

    //theme 
  

  render() {
    return (
      
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{this.state.action}</h1>

              <div className="form-group">
                <label>Tiêu đề:</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.changeTitle}
                />
              </div>

              <div className="form-group">
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Nội dung:
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    type="text"
                    value={this.state.contentes}
                    onChange={this.changeContentes}
                  ></textarea>
                </div>
              </div>
              <form class="row">
                <div className="form-group col-md-4">
                  <label>Trạng thái:</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={this.state.status}
                    onChange={this.changeStatus}
                  >
                    <option value="Chưa làm">Chưa làm</option>
                    <option value="Đang làm">Đang làm</option>
                    <option value="Hoàn thành">Hoàn thành</option>
                    <option value="Quá hạn">Quá hạn</option>
                  </select>
                </div>

                <div className="form-group col-md-4">
                  <label>Ngày bắt đầu:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={this.state.startDate}
                    onChange={this.changestartDate}
                  />
                </div>

                <div className="form-group col-md-4">
                  <label>Ngày kết thúc:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={this.state.endDate}
                    onChange={this.changeendDate}
                  />
                </div>
              </form>

              <div className="form-group">
                <label>Mô tả:</label>
                <textarea
                  className="form-control"
                  rows="3"
                  type="text"
                  value={this.state.commnent}
                  onChange={this.changeCommnent}
                ></textarea>
              </div>

              <div className="form-group">
                <button
                  style={{ marginTop: `10px` , marginBottom: `10px`}}
                  className="btn btn-primary me-10"
                  onClick={
                    this.state.action === "ADD TO DO LIST"
                      ? this.addItem
                      : this.updateItem
                  }
                >
                  {this.state.action === "ADD TO DO LIST" ? "Add" : "Update"}
                </button>
              </div>
            </div>

            <div className="col-md-12">
              <h1>To Do List</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Nội dung</th>
                    <th>Trạng thái</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Mô tả</th>
                    <th>Cập nhật</th>
                    <th>Xoá</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((item, id) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{item.title}</td>
                      <td>{item.contentes}</td>
                      <td>{item.status}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.commnent}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => this.editItem(item, id)}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => this.deleteItem(item.title)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;