package com.pessoal.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pessoal.dsmovie.dtos.MovieDTO;
import com.pessoal.dsmovie.dtos.ScoreDTO;
import com.pessoal.dsmovie.entities.Movie;
import com.pessoal.dsmovie.entities.Score;
import com.pessoal.dsmovie.entities.User;
import com.pessoal.dsmovie.repositories.MovieRepository;
import com.pessoal.dsmovie.repositories.ScoreRepository;
import com.pessoal.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	//1 Informar email, id do filme e valor da avaliação (1 a 5).
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		//Recuperar usuário do banco de dados pelo email
		User user = userRepository.findByEmail(dto.getEmail());
		//Se o usuário não existir, insira no banco.
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		//Salvar a avaliação do usuário para o dado filme.
		score = scoreRepository.saveAndFlush(score);
		
		//Recalcular a avaliação média do filme e salvar no banco de dados.
		double sum = 0.0;
		for (Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
		
	}

}
