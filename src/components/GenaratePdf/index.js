// Example Props

// Filename = string any file name
// headerItem = [] single array [1,2,3,45,55]

// multiArray = [[],[],[]] multidimensional  array [[1,2,3], [1,2,3], [1,2,3]]

import * as React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {TouchableOpacity, ToastAndroid} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';

const RnPdf = props => {
  const {Filename, value} = props;

  const createHeader = () => {
    let headerItem = [];
    value.map(e => {
      let objectData = Object.entries(e);
      objectData.filter(e => {
        if (e[0] === 'created_at' || e[0] === 'updated_at' || e[0] === 'id') {
        } else {
          headerItem.push(e[0].toUpperCase().replaceAll('_', ' '));
          return e;
        }
      });
    });
    return headerItem;
  };

  const createBodyItem = () => {
    let bodyItem = [];
    value.map(e => {
      let row = [];
      let objectData = Object.entries(e);
      objectData.filter(e => {
        if (e[0] === 'created_at' || e[0] === 'updated_at' || e[0] === 'id') {
        } else {
          row.push(e[1]);
          return e;
        }
      });

      row.length > 0 ? bodyItem.push(row) : null;
    });

    return bodyItem;
  };

  var header = `<table><tr>${createHeader()?.map(e => {
    return (
      '<th style="color:#fff;background-color:#00695c;padding: 10px;">' +
      e +
      '</th>'
    );
  })}</tr>`;

  var body = `${createBodyItem()?.map(
    e =>
      '<tr>' +
      e.map(i => '<td style="text-align:center;">' + i + '</td>') +
      '</tr>',
  )}</table>`;

  let dev = header + body;

  var withoutComma = dev.replace(/,/g, ' ');

  const createPDF = async () => {
    let options = {
      html: withoutComma,
      fileName: `${Filename + moment().unix()}`,
      directory: 'Documents',
    };
    let file = await RNHTMLtoPDF.convert(options);
    let data = `Download Successfully. \n File path : ${file.filePath} `;
    ToastAndroid.showWithGravityAndOffset(
      data,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <TouchableOpacity onPress={() => createPDF()}>
      <Icon name="pdffile1" size={30} color="#000" />
    </TouchableOpacity>
  );
};

export default RnPdf;
