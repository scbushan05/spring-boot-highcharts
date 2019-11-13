package in.bushansirgur.highcharts.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import in.bushansirgur.highcharts.dao.DataDAO;
import in.bushansirgur.highcharts.dao.MultipleDataDAO;
import in.bushansirgur.highcharts.dao.PiechartDAO;
import in.bushansirgur.highcharts.model.Data;
import in.bushansirgur.highcharts.model.MultipleData;
import in.bushansirgur.highcharts.model.PiechartData;

@Controller
public class HomeController {
	
	@Autowired
	DataDAO dataDAO;
	
	@Autowired
	MultipleDataDAO multipleDataDAO;
	
	@Autowired
	PiechartDAO piechartDAO;
	
	@RequestMapping("/")
	public String showHome(){
		return "index";
	}
	
	@RequestMapping("/linechartdata")
	@ResponseBody
	public String getDataFromDB(){
		List<Data> dataList = dataDAO.findAll();
		JsonArray jsonArrayCategory = new JsonArray();
		JsonArray jsonArraySeries = new JsonArray();
		JsonObject jsonObject = new JsonObject();
		dataList.forEach(data->{
			jsonArrayCategory.add(data.getCategory());
			jsonArraySeries.add(data.getSeries());
		});
		jsonObject.add("categories", jsonArrayCategory);
		jsonObject.add("series", jsonArraySeries);
		return jsonObject.toString();
	}
	
	@RequestMapping("/multiplelinechart")
	public ResponseEntity<?> getDataForMultipleLine() {
		List<MultipleData> dataList = multipleDataDAO.findAll();
		Map<String, List<MultipleData>> mappedData = new HashMap<>();
		for(MultipleData data : dataList) {
			
			if(mappedData.containsKey(data.getName())) {
				mappedData.get(data.getName()).add(data);
			}else {
				List<MultipleData> tempList = new ArrayList<MultipleData>();
				tempList.add(data);
				mappedData.put(data.getName(), tempList);
			}
			
		}
		return new ResponseEntity<>(mappedData, HttpStatus.OK);
	}
	
	@RequestMapping("/piechart")
	public ResponseEntity<?> getDataForPiechart(){
		List<PiechartData> piechartData = piechartDAO.findAll();
		return new ResponseEntity<>(piechartData, HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
