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
      action: "Thêm Công Việc", //default ADD ITEM
      items: JSON.parse(window.localStorage.getItem("datademo"))
    };
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

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

  //thêm cv
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
      window.alert("Tên công việc công việc đã có");
    }

    const data = this.state.items;
    window.localStorage.setItem("datademo", JSON.stringify(data));
    
  };

  //sủa  công việc
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
      action: "Cập Nhật Công Việc",
    });
  };

  //cập nhật sau sửa
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

    // lấp giá trị cập nhật
    this.setState({
      items: items,
      title: "",
      contentes: "",
      status: "",
      startDate: "",
      endDate: "",
      commnent: "",
      action: "Thêm Công Việc",
    });
    const data = this.state.items;
    window.localStorage.setItem("datademo", JSON.stringify(data));
  };

  //Xoá công việc
  deleteItem = (title) => {
    this.setState({
      items: this.state.items.filter((item) => item.title != title),
    });
    const data = this.state.items;
    console.log(data);
    window.localStorage.setItem("datademo", JSON.stringify(data));
  }


  render() {
    return (
      <div style={{backgroundColor: "lightblue"}}>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand " style={{ marginLeft: `30px` }} href="/">
              Home
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
              <h1 style={{ textAlign: `center`}}>{this.state.action}</h1>

              <div className="form-group">
                <label>Tên công việc:</label>
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
                  style={{ marginTop: `15px` , marginBottom: `10px`}}
                  className="btn btn-primary me-10"
                  onClick={
                    this.state.action === "Thêm Công Việc"
                      ? this.addItem
                      : this.updateItem
                  }
                >
                  {this.state.action === "Thêm Công Việc" ? "Thêm" : "Cập nhật"}
                </button>
              </div>
            </div>

            <div className="col-md-12" style={{ textAlign: `center`}}>
              <h1>Danh sách công việc</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên công việc</th>
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
                          Cập nhật
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => this.deleteItem(item.title)}
                        >
                          Xoá
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