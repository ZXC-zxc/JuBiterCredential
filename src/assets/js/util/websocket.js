class jbx {
  constructor(url) {
      this.url = url;

      // close来源判断及后续操作
      this.closeConfig = {
          resolve: null,
          closing: false
      };
      // 计数器，处理req、resp的id用
      this.counter = ((count) => {
          return () => {
              // 留两个给设备插入、拔除用
              count %= 0xFFFE;
              count += 1;
              return count;
          };
      })(0);
      // promise池
      this.promisePool = {};
  }

  open() {
      return new Promise((resolve, reject) => {
          if (typeof this._websocket === 'undefined') {
              console.log("opening " + this.url);
              this._websocket = new WebSocket(this.url);
              this._websocket.onopen = (e) => {
                  console.log("open successed");
                  resolve({
                      e,
                      ws: this
                  });
              };
              this._websocket.onerror = (e) => {
                  reject(e);
              };
          }
          this._websocket.onclose = (e) => {
              // 非主动close
              if (!this.closeConfig.closing) {
                  console.log('reconnect');
                  // 对应的重连操作
              }
              // 若手动close，恢复初始状态
              this.closeConfig.closing = false;
          };

          this._websocket.onmessage = (evt) => {
              console.log(evt.data);
              try {
                  var resp = JSON.parse(evt.data);
                  const key = resp["id"];
                  const code = resp["code"];
                  const req = this.promisePool[key];
                  if (code == 0) {
                      if( "data" in resp) {
                          req.resolve(resp["data"]);
                      } else {
                          req.resolve();
                      }
                  } else {
                      req.reject(resp);
                  }
                  if (key != 0xFFFF && key != 0xFFFE) {
                      delete this.promisePool[key];
                  }
              } catch (e) {
                  console.error(e);
              }
          };
      });
  }

  close() {
      this.closeConfig.closing = true;
      this._websocket.close();
  }
  // token包含在content中
  send(cmd, param) {
      return new Promise((resolve, reject) => {
          const key = this.counter();
          this.promisePool[key] = {
              resolve,
              reject
          };
          var req = JSON.stringify({
              "id": key,
              "op": cmd,
              "param": param
          });
          this._websocket.send(req);
      });
  }

  // 获取序列号
  getSerialNumber() {
      return this.send("getSerialNumber", {});
  }

  // 授权
  authorize(hash, address) {
      return this.send("authorize", {
          "hash": hash,
          "address": address
      });
  }

  // 声明
  statement(hash, address) {
      return this.send("statement", {
          "hash": hash,
          "address": address
      });
  }
}

var jubiterOper = new jbx("ws://localhost:9003");
jubiterOper.open();

// 将方法暴露出去
export {
  jubiterOper
}