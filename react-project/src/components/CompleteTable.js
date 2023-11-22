// EstimateTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Font, Image } from '@react-pdf/renderer';

// 한글을 pdf에서 지원하지 않아 폰트를 불러와야함
Font.register({
  family: 'Nanum Gothic',
  src: './NanumGothic.ttf'
});

const CompleteTable = ({ data }) => {
  const calculateTotalPrice = () => {
    return data.reduce((total, product) => total + product.price, 0);
  };
  const styles = StyleSheet.create({
    table: {
      display: "flex",
      flexDirection: "column",
      borderWidth: 1,
      borderColor: "#000",
    },
    tableRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: '#000',
    },
    tableCell: {
      flex: 1,
      padding: 5,
      fontSize: 10,
      fontFamily: 'Nanum Gothic',
    },
    imageContainer: {
      width: 50,
      height: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 30,  
      height: 30, 
    },
  });

  //설문 결과 생성된 견적을 Document로 생성
  const MyDocument = () => (
    <Document>
      <Page size="A4">
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>분류</Text>
            <Text style={styles.tableCell}>이미지</Text>
            <Text style={styles.tableCell}>제품명</Text>
            <Text style={styles.tableCell}>가격</Text>
          </View>
          {data.map((product) => (
            <View key={product.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{product.type}</Text>
              <Image
                style={styles.image}
                src={process.env.PUBLIC_URL + product.image}
                alt={product.name}
              />
              <Text style={styles.tableCell}>{product.name}</Text>
              <Text style={styles.tableCell}>{product.price}</Text>
            </View>
          ))}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>총 가격</Text>
            <Text style={styles.tableCell}>{calculateTotalPrice()}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>분류</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>제품명</TableCell>
            <TableCell>가격</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.type}</TableCell>
              <TableCell><img className="pro-icon" src={process.env.PUBLIC_URL + product.image} alt={product.name} /></TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3}>총 가격</TableCell>
            <TableCell>{calculateTotalPrice()}</TableCell>
            <PDFDownloadLink document={<MyDocument />} fileName="컴퓨터 견적.pdf">
            {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'PDF로 다운로드'
            }
            </PDFDownloadLink>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompleteTable;
