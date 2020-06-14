//浏览器地址
var exploerRootUrl = "http://39.102.47.108";
//根据高度跳转到浏览器
export const linkBlockChainExploerByHeight = (height) => {
    window.open(
        exploerRootUrl + "/blocks/" + height,
        "_blank"
    );
};
//根据txhash跳转到浏览器
export const linkBlockChainExploerByTxhash = (txhash) => {
    window.open(
        exploerRootUrl + "/tx/" + txhash,
        "_blank"
    );
};