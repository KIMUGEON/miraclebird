package com.ssafy.miraclebird.dto;

import com.ssafy.miraclebird.entity.Landmark;
import com.ssafy.miraclebird.entity.Post;
import com.ssafy.miraclebird.securityOauth.domain.entity.user.Role;
import com.ssafy.miraclebird.util.ModelMapperUtils;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LandmarkDto {

    private long landmarkIdx;

    private String province;

    private String city;

    private int dongCode;

    private String tokenId;

    private String hash;

    private String title;

    private String content;

    private int starForce;

    private Boolean selling;

    private long sellPrice;

    private long userIdx;

    private String userName;

    private String userImageUrl;

    public static LandmarkDto of(Landmark landmarkEntity) {
        LandmarkDto landmarkDto = ModelMapperUtils.getModelMapper().map(landmarkEntity, LandmarkDto.class);

        return landmarkDto;
    }

}
