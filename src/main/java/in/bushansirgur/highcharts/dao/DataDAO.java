package in.bushansirgur.highcharts.dao;

import in.bushansirgur.highcharts.model.Data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataDAO extends JpaRepository<Data, Integer>{

}
