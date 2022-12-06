package com.ISOUR.repository;

import com.ISOUR.entity.KakaoLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KakaoRepository extends JpaRepository<KakaoLogin, Long> {

    KakaoLogin findBykakaoEmail(String email);
    KakaoLogin findBykakaoId(Long kakaoid);
}
