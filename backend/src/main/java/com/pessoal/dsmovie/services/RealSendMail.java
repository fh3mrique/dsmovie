package com.pessoal.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class RealSendMail {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	public void sendEmail() {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("fhl@discente.ifpe.edu.br");
        message.setSubject("Novo registro criado");
        message.setText("Um novo registro foi criado no sistema.");
        javaMailSender.send(message);
    }

}
