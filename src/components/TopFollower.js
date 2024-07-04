import React from "react";
import "../styles/TopFollower.css";
import Badge from "./common/Badge";

const FOLLOWERS = [
  {
    avatar:
      "https://s3-alpha-sig.figma.com/img/afd1/8d18/9c5511dcd14aab03345d2147ac400351?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfksbmaz4bBXyOoJ0OrDB0srAt9Mq9~-7QkFxWEechUGRw46Lpw4lWJY7OBlmbEBUOQgMPJ2fIeAqmDE5hJi-AV4qwAjKvhrKmbSmifEfqlvQcIxwFzWtQ1z4a86n2FIA4gEsP-ARuShdpZBMO-6NEhdKJvsVtovLbBJFZXIbtx2OP1e2MGOkJMgwP9rsZqgU0XtaX7nhOHJGHcqORVLJsBQWBy~Etg7DRiAriFrcYwgTaCmbnrCk5G0VYtmBHxPzVEQachDOWFx4Rx4klaPS~gU~sX6IzdP-U3KPx9mmH8yQBsEN1t3B-jJxqtAUAN7SQujAx1QgTRSy7bnbNIIQA__",
    name: "Kevin Rose",
    value: "968",
  },
  {
    avatar:
      "https://s3-alpha-sig.figma.com/img/8993/efa8/6a4d9dc76658e80efc85ce31d925b05b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQDjT3ZXnLwaR3forYVvJEDSmRFWIWcXSTiZxSscscOe5zbOc3eQJ0u3OFdyBCcEIilP6Zd-oPoxYjztXnb~MJRD5qsqeHzCuLJNCF6z0tosk6vVElSSzDSW-QYdKX~0G2Eqs8W8gf8AsVUMsoVtd~4dPariuGa~wsvM3kPTj47-yvf0S~-o4stnZf0CvtZIc3ElEZFelk62bN~IKFqizWrTMQjxYuGACCoo~NWfJdJHtlhw-QULod1~TJ1N7hkZaPnMpabvRn1oA6-QBgL-uBprdTDXZsZn8WFKY9YLVS5dvZlcDUqtcXYWtDkCgyPwiGh-tY0xZYH3ySTgBzO9mQ__",
    name: "Loom Dark",
    value: "796",
  },
  {
    avatar:
      "https://s3-alpha-sig.figma.com/img/fbd7/0c8a/8b8d2b12c1b66f216e1454b9074abc0e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VoT9L5dJUUUrQFkEYVbcmEM6-WvRQ1qcJW1jfcfwmGqiZKZ6DPRE4ELKrFD9aOn68KxxCxLvPJAGISpFpeAuB58YpJjSIyKqj-ZqJYx249Pj837ZDATCmLGmbIoaqEwif8JTt0GxU6UR66W3EhfgNdn6PNnDQ5IIfS27RrJgPzciM7bgQ8RrlHLb8ojgD5EqNi1iCi9Z3KHlSgHffaGIumEx~ltBRa9mZ8ByCwvN7UrdrGElbwUtcEjM0ZQuzBzPHk0muqw1bs8BqB3vivW~XKA9EDdZr3CLtj77F7ZaswixS2w7vg95j-VGTv1NpWnYRvIyBFNh5xbEBww6yv8l8g__",
    name: "OpenSea",
    value: "781",
  },
  {
    avatar:
      "https://s3-alpha-sig.figma.com/img/245e/1b4c/2cd42c0cbad159ab32a5070174e0deed?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a5TEgD7olfr57TgHzURdOQqx27Y8-Z-NB2kFdNeJwzSNkf2cYDaBBU21svQHtPmFS~9j6r19w2kThPXks2lwmdrdturQLK~icyAOhWSkQWQISr4dMr1YZDoJ-6MSb~IM4SHXvOmUa1tzMeuWy3XXWYcQRUlm5CcHCB3KBmVMHdbySC9Z7biQ2ZzjKvN8Z-gC-P-0oMqwB0f0BA79B0DbwUiCiiK4Q91MnzfhCp4jYmywRanFzmTBolAKemrcRxWNKT39mR0sqlG~97hw~UlsLgv1mEZLe8ygeyiy7C064caNikmA0HQtcNHKUs4nvTer74vjyw0hi9szdtpzSylg5Q__",
    name: "Alex Svanevik",
    value: "758",
  },
  {
    avatar:
      "https://s3-alpha-sig.figma.com/img/65b2/006a/b25126b96eb656b91191c3ccd83e0e6d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOFfe0mx2DzZ7Jv563NEacea~OAtAIBOc3GFunT1HCq~3p8A5IisQUEi97iTqS0Kzjma7BhMe7hq1FZ0qJ7NcdgQLZ5gfwuhoMUw8pSBZdnjNQZ5i2Q~KLvDMePEjZBMujsPPoMLkKtxt6Uc1pKl5eAq0pgAzF8Zj2RwsH9oJgr1n9-9myYG-A6biNVe1fE90yNIsX7TzH3Cuvo8-OGJ~TkhF6rol2q-Rosh~OvJBq-boK1jaktJ4RGY4oXpN4bX0wN3Tli7kJmyiVBxpauvPbgqUH0sGz-eD6zIVPkANLpksJ0oTxhhEK1o7H3F-Qp8k2sxSVxfehObivsgB9jorQ__",
    name: "Jake Brukhman",
    value: "699",
  },
];

const TopFollowers = () => {
  return (
    <div className="top-followers">
      <h3>Top Followers</h3>
      <ul>
        {FOLLOWERS.map((follower, index) => (
          <li key={index}>
            <Badge
              avatarUrl={follower.avatar}
              text={follower.name}
              number={follower.value}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFollowers;
