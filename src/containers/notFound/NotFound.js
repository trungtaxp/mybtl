import React , { Component } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: gray;
`;

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: 0,
    }
  }

  render() {
    return (
      <Wrapper>
        <div>Not found</div>


{/* <div className="col-md-12">
              <Form id="contactForm">
                <Form.Group as={Col} id="formTieuDe">
                  <Form.Label>Tiêu đề: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tiêu đề"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.changeTitle}
                  />
                </Form.Group>

                <Form.Group as={Col} id="formNoiDung">
                  <Form.Label>Nội dung: </Form.Label>
                  <Form.Control
                    placeholder="Nội dung"
                    type="text"
                    className="form-control"
                    value={this.state.contentes}
                    onChange={this.changeContentes}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} id="formTrangThai">
                    <Form.Label>Trạng thái: </Form.Label>
                    <Form.Select
                      type="text"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatus}
                    >
                      <option value="Chưa làm">Chưa làm</option>
                      <option value="Đang làm">Đang làm</option>
                      <option value="Hoàn thành">Hoàn thành</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} id="formStartDate">
                    <Form.Label>Ngày bắt đầu: </Form.Label>
                    <Form.Control
                      type="date"
                      value={this.state.startDate}
                      onChange={this.changestartDate}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} id="formEndDate">
                    <Form.Label>Ngày kết thúc: </Form.Label>
                    <Form.Control
                      type="date"
                      value={this.state.endDate}
                      onChange={this.changeEndDate}
                    ></Form.Control>
                  </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formCommnent">
                  <Form.Label>Commnent: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Commnent mô tả"
                    value={this.state.commnent}
                    onChange={this.changeCommnent}
                  />
                </Form.Group>
</div> */}


      </Wrapper>
    )
  }
}

export default NotFound;



