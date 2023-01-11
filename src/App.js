import './App.css';
import { saveAs } from 'file-saver'

function App() {
  const generatePDF = () => {
    saveAs('https://webpage2pdf.s3.ap-southeast-1.amazonaws.com/bf7d93fa03055bc81d29109dc7f1a6d2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAW5GQGUB53AP67A2U%2F20230111%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20230111T032938Z&X-Amz-Expires=43200&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAPOpz145QR6sVTTmBuUPcRA%2BxcLcvBRgqPfi3IsprDSqAiEA1OEClttWZXKpj1bLmJkn%2FZppNHGeXxQyGf6MPnyLpq4q%2BAIInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw0NzUwMzA1MjgxMjMiDGSn%2Fi8V%2FIF2AQ09yCrMAusD6KrRX9qQtHQQkn3yFsihg6fX90L932v7%2FkcELEexFK3pRB8Y%2FzJYpR4oKSVTE8h7MCLssCWJvuBvIvA320eAaaxeBVeMdPOT0oEHvX2gLN3%2BYWIoGitXLZ9nCfME2EY6sQ84evamvmiFbiz9DWywAPKtb44jDZeTZDcSntDuvB9wU3wQuXVyqHn1cstj5za7mOuFVGWzWG9e51sBn4NpOeZdkDIlkOglndcQQgU5i%2BGZfXEF%2BVrnWZPPha7UgSL%2BN0YlGiaEbKoq%2BJ5cv3UQbtBF77ukMj%2FjEtgubvetHsd%2Bq2Ob3Ul3R%2Fs3DGYErADM%2FNiaqbkZLFMBSYNUl7WMN0byubiaioFWtm4vbHjUUFSFm5cc27o6JIT0G0Ov7Y6a%2B0QnTs5xHXTVws4kth6hzpmFPyClutl8Tw2P2hCkV5hhUkcj2XH98LjzMKHa%2BJ0GOp0BJSOtEwmmS0HnVRADBednvfabUDdSQIAy2u5uFV4113zLE20BMtAE5yPRErgYCCrsflL3b0FU66PCe3x5UbqlMDvyyQ5Gxj%2FTL3848zg17Fm07EZSX89oCb8IRLjVNU7lAzp3F8kPyML6xv%2FCcpW9z%2B9j2HoFxq0zDYR8EMoeyMNFYn9111heYpS3%2BluzCb7oPfP0wYpun7eLzWOdsQ%3D%3D&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=55e42f7cc753c74ec0faf2299b70c2eb74ae378e2a260dffcec0f68c8e08bd38', `testing.pdf`)
  }

  return (
    <>
      <button onClick={generatePDF}>generate</button>
    </>
  );
}

export default App;
