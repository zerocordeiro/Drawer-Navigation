import { Text, View, Dimensions } from "react-native";
import React from "react";
import { LineChart } from 'react-native-chart-kit';
import { allStyles } from "./allStyles";
import { linedata } from "../Screens/SecondScreen";

export function LineChartShow() {
  return (
    <View style={allStyles.chartview}>
      <Text>Line Chart</Text>
      <LineChart
        data={linedata}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel={`EUR `}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }} />
    </View>

  );
}
