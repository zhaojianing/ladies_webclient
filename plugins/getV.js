window.getVersion = function getExplorerInfo() {
  var explorer = window.navigator.userAgent.toLowerCase();
  var u = navigator.userAgent,
    app = navigator.appVersion;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    //这个是安卓操作系统
    return 'Android';
  }
  if (isIOS) {
    //这个是ios操作系统
    return 'Ios';
  }

  function getPgjs(u) {

    var isWindows = u.indexOf("Window") > 0;
    var isMac = u.indexOf("Mac OS X") > 0;
    var isLinux = u.indexOf("Linux") > 0;

    if (isWindows)
      return "Windows";
    if (isMac)
      return "Mac ";
    if (isLinux)
      return "Linux";
    else
      return "NUll";
  }
  //ie
  if (explorer.indexOf("msie") >= 0) {
    var ver = explorer.match(/msie ([\d.]+)/)[1];
    var target = getPgjs(u);
    return {
      type: target + ' / ' + "IE",
      version: ver
    };
  }
  //firefox
  else if (explorer.indexOf("firefox") >= 0) {
    var ver = explorer.match(/firefox\/([\d.]+)/)[1];
    var target = getPgjs(u);
    return {
      type: target + ' / ' + "Firefox",
      version: ver
    };
  }
  //Chrome
  else if (explorer.indexOf("chrome") >= 0) {
    var ver = explorer.match(/chrome\/([\d.]+)/)[1];
    var target = getPgjs(u);
    return {
      type: target + ' / ' + "Chrome",
      version: ver
    };
  }
  //Opera
  else if (explorer.indexOf("opera") >= 0) {
    var ver = explorer.match(/opera.([\d.]+)/)[1];
    var target = getPgjs(u);
    return {
      type: target + ' / ' + "Opera",
      version: ver
    };
  }
  //Safari
  else if (explorer.indexOf("Safari") >= 0) {
    var ver = explorer.match(/version\/([\d.]+)/)[1];
    var target = getPgjs(u);
    return {
      type: target + ' / ' + "Safari",
      version: ver
    };
  }
}
