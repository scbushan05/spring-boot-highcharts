package in.bushansirgur.highcharts.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.bushansirgur.highcharts.model.PiechartData;

@Repository
public interface PiechartDAO extends JpaRepository<PiechartData, Integer>{

}
