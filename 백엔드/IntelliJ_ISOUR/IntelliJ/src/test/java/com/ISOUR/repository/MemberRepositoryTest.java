package com.ISOUR.repository;

import com.ISOUR.entity.MemberInfo;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
class MemberRepositoryTest {
    @Autowired
    MemberRepository memberRepository;

    @Test
    @DisplayName("회원가입 테스트")
    public void signUpTest() {
        for(int i = 1; i <= 10; i++) {
            MemberInfo memberInfo = new MemberInfo();
            memberInfo.setName("이름" + i);
            memberInfo.setId("idtest" + i);
            memberInfo.setPwd("password" + i);
            memberRepository.save(memberInfo);
        }
    }

    // 회원가입
    public boolean signUpMember(String name, String id, String pwd, String birth, String gender, String region1, String region2) {
        MemberInfo memberInfo = new MemberInfo();
        memberInfo.setName(name);
        memberInfo.setId(id);
        memberInfo.setPwd(pwd);
        memberInfo.setBirth(birth);
        memberInfo.setGender(gender);
        memberInfo.setRegion1(region1);
        memberInfo.setRegion2(region2);

//        MemberInfo result = memberRepository.save(memberInfo);
//        log.warn(result.toString());
        memberRepository.save(memberInfo);

        return true;
    }

//    16 +
//    32 +
//    48 +
    @Test
    @DisplayName("매칭용회원가입 테스트")
    public void signUpTest_Matching() {
        String[] MBTI = new String[] { "", "INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP" };
        for(int i = 1; i <= 16; i++) {
            MemberInfo memberInfo = new MemberInfo();
            memberInfo.setName("test" + (32 + i));
            memberInfo.setNickname("testNic" + (32 + i));
            memberInfo.setId("test" + (32 +i));
            memberInfo.setPwd("test" + ( 32 +i));
            memberInfo.setMbti(MBTI[i]);
            memberInfo.setIntroduce("Im test" + (32 + i) + "입니다.");
            memberRepository.save(memberInfo);
        }
    }
}