package com.pessoal.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pessoal.dsmovie.entities.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {

}
