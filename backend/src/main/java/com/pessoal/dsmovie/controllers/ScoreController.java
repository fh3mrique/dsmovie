package com.pessoal.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pessoal.dsmovie.dtos.MovieDTO;
import com.pessoal.dsmovie.dtos.ScoreDTO;
import com.pessoal.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
@CrossOrigin(origins = "*")
public class ScoreController {

	@Autowired
	private ScoreService scoreService;

	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto) {

		return scoreService.saveScore(dto);
	}

}
