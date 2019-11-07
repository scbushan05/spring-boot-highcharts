package in.bushansirgur.highcharts.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.bushansirgur.highcharts.model.MultipleData;

@Repository
public interface MultipleDataDAO extends JpaRepository<MultipleData, Integer> {

}
