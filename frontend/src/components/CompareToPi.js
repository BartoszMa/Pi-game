

async function compareStrings(string1, filePath) {
  try {
    const response = await fetch(filePath);
    const fileText = await response.text();
    let count = 0;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== fileText[i]) {
            break;
        }
        count++;
    }
    return count;
  } catch (error) {
    console.log(error);
  }
}



export default compareStrings
