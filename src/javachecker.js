

function checkJavaVersion() {
  exec('java -version', (error, stdout, stderr) => {
    let javaDiv = document.getElementById('java');
    if (stderr.includes('version "1.8')) {
      javaDiv.innerHTML = 'Java 8 is installed.';
    } else {
      javaDiv.innerHTML = '<font color="yellow">Java 8 is not installed!</font>';
    }
  });
}

checkJavaVersion();