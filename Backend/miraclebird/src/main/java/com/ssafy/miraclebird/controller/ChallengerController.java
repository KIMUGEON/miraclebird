package com.ssafy.miraclebird.controller;

import com.ssafy.miraclebird.dto.ChallengeDto;
import com.ssafy.miraclebird.dto.ChallengerDto;
import com.ssafy.miraclebird.service.ChallengerService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/challenger")
@Api("챌린지 미션 관련 REST V1")
public class ChallengerController {
    private final ChallengerService challengerService;

    @Autowired
    public ChallengerController(ChallengerService challengerService) {
        this.challengerService = challengerService;
    }

    @ApiOperation(value = "모든 challenger의 정보를 반환한다.", response = ChallengerDto.class)
    @GetMapping("/")
    public ResponseEntity<List<ChallengerDto>> getChallengerALL() {
        List<ChallengerDto> result = challengerService.getChallengerALL();

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @ApiOperation(value = "특정 challenger의 정보를 반환한다.", response = ChallengerDto.class)
    @GetMapping("/{challenger_idx}")
    public ResponseEntity<ChallengerDto> getChallengerById(@PathVariable("challenger_idx") Long challengerIdx) {
        ChallengerDto result = challengerService.getChallengerById(challengerIdx);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @ApiOperation(value = "유저와 챌린지 정보를 받아서 챌린지 참가", response = ChallengerDto.class)
    @PostMapping("/")
    public ResponseEntity<String> addChallenger(@RequestBody ChallengerDto challengerDto) {
        try {
            challengerService.addChallenger(challengerDto);
        }
        catch (Exception e) {
            throw new RuntimeException();
        }


        return new ResponseEntity<String>("success",HttpStatus.OK);
    }

    @ApiOperation(value = "유저와 챌린지 정보를 받아서 챌린지 참여 취소", response = ChallengerDto.class)
    @DeleteMapping("/")
    public ResponseEntity<String> deleteChallenger(@RequestBody ChallengerDto challengerDto) {
        try {
            challengerService.deleteChallenger(challengerDto);
        }
        catch (Exception e) {
            throw new RuntimeException();
        }


        return new ResponseEntity<String>("success",HttpStatus.OK);
    }
}
