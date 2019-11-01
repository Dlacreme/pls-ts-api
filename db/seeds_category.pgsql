
-- INSERT INTO categories VALUES(id, picture_url, parent_id) VALUES('', 'https://github.com/dlacreme/pls-assets', NULL);
-- INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('', 'en', '');
-- INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('', 'fr', '');
-- INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('', 'vi', '');

-- PARENTS
INSERT INTO categories (id, picture_url, parent_id)
VALUES('air_sports', 'https://github.com/dlacreme/pls-assets/air_sports', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('parachuting', 'https://github.com/dlacreme/pls-assets/air_sports', 'air_sports');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('winter_sports', 'https://github.com/dlacreme/pls-assets/winter_sports', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('skiing', 'https://github.com/dlacreme/pls-assets/winter_sports', 'winter_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('biathlon', 'https://github.com/dlacreme/pls-assets/winter_sports', 'winter_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('curling', 'https://github.com/dlacreme/pls-assets/winter_sports', 'winter_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('hockey', 'https://github.com/dlacreme/pls-assets/winter_sports', 'winter_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('ice_skating', 'https://github.com/dlacreme/pls-assets/winter_sports', 'winter_sports');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('aquatic_sports', 'https://github.com/dlacreme/pls-assets/aquatic_sports', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('swimming', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('diving', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('scuba_diving', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('synchronized_swimming', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('canoeing_kayaking', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('water_polo', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('rafting', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('sailing', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('surfing', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('water_skiing', 'https://github.com/dlacreme/pls-assets/aquatic_sports', 'aquatic_sports');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('athletics', 'https://github.com/dlacreme/pls-assets/athletics', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('running', 'https://github.com/dlacreme/pls-assets/athletics', 'athletics');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('triathlon', 'https://github.com/dlacreme/pls-assets/athletics', 'athletics');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('martial_arts', 'https://github.com/dlacreme/pls-assets/martial_arts', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('arm_wrestling', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('boxing', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('fencing', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('judo', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('jujitsu', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('karate', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('kendo', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('kickboxing', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('muaythai', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('kungfu', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('mixed_martial_arts', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('wrestling', 'https://github.com/dlacreme/pls-assets/martial_arts', 'martial_arts');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('art_sports', 'https://github.com/dlacreme/pls-assets/arts', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('dance', 'https://github.com/dlacreme/pls-assets/arts', 'art_sports');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('ball_sports', 'https://github.com/dlacreme/pls-assets/ball_sports', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('baseball', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('basketball', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('beach_soccer', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('cricket', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('foosball', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('football', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('american_football', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('handball', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('rugby', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('dodgeball', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('volleyball', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('golf', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('miniature_golf', 'https://github.com/dlacreme/pls-assets/ball_sports', 'ball_sports');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('accuracy_sports', 'https://github.com/dlacreme/pls-assets/accuracy_sports', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('archery', 'https://github.com/dlacreme/pls-assets/accuracy_sports', 'accuracy_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('shooting', 'https://github.com/dlacreme/pls-assets/accuracy_sports', 'accuracy_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('billard', 'https://github.com/dlacreme/pls-assets/accuracy_sports', 'accuracy_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('darts', 'https://github.com/dlacreme/pls-assets/accuracy_sports', 'accuracy_sports');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('bowling', 'https://github.com/dlacreme/pls-assets/accuracy_sports', 'accuracy_sports');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('outdoor', 'https://github.com/dlacreme/pls-assets/outdoor', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('climbing', 'https://github.com/dlacreme/pls-assets/outdoor', 'outdoor');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('parkour', 'https://github.com/dlacreme/pls-assets/outdoor', 'outdoor');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('mountain_running', 'https://github.com/dlacreme/pls-assets/outdoor', 'outdoor');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('fishing', 'https://github.com/dlacreme/pls-assets/outdoor', 'outdoor');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('ride', 'https://github.com/dlacreme/pls-assets/ride', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('skateboard', 'https://github.com/dlacreme/pls-assets/ride', 'ride');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('roller_skate', 'https://github.com/dlacreme/pls-assets/ride', 'ride');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('racket_sport', 'https://github.com/dlacreme/pls-assets/racket_sport', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('badminton', 'https://github.com/dlacreme/pls-assets/racket_sport', 'racket_sport');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('tennis', 'https://github.com/dlacreme/pls-assets/racket_sport', 'racket_sport');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('squash', 'https://github.com/dlacreme/pls-assets/racket_sport', 'racket_sport');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('table_tennis', 'https://github.com/dlacreme/pls-assets/racket_sport', 'racket_sport');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('racing', 'https://github.com/dlacreme/pls-assets/racing', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('horse_racing', 'https://github.com/dlacreme/pls-assets/racing', 'racing');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('car_racing', 'https://github.com/dlacreme/pls-assets/racing', 'racing');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('motorcycle_racing', 'https://github.com/dlacreme/pls-assets/racing', 'racing');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('cycling', 'https://github.com/dlacreme/pls-assets/racing', 'racing');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('pub_games', 'https://github.com/dlacreme/pls-assets/pub_games', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('table_hockey', 'https://github.com/dlacreme/pls-assets/pub_games', 'pub_games');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('table_soccer', 'https://github.com/dlacreme/pls-assets/pub_games', 'pub_games');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('board_games', 'https://github.com/dlacreme/pls-assets/board_games', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('chess', 'https://github.com/dlacreme/pls-assets/board_games', 'board_games');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('go', 'https://github.com/dlacreme/pls-assets/board_games', 'board_games');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('fitness', 'https://github.com/dlacreme/pls-assets/fitness', NULL);
--
INSERT INTO categories (id, picture_url, parent_id)
VALUES('body_building', 'https://github.com/dlacreme/pls-assets/fitness', 'fitness');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('power_lifting', 'https://github.com/dlacreme/pls-assets/fitness', 'fitness');
INSERT INTO categories (id, picture_url, parent_id)
VALUES('yoga', 'https://github.com/dlacreme/pls-assets/fitness', 'fitness');


INSERT INTO categories (id, picture_url, parent_id)
VALUES('gymnastics', 'https://github.com/dlacreme/pls-assets/gymnastics', NULL);
--



------ i18N ------

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('air_sports', 'en', 'Air Sports');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('air_sports', 'fr', 'Sport d\'air');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('air_sports', 'vi', 'Air Sports');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('parachuting', 'en', 'Parachute');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('parachuting', 'fr', 'Parachute');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('parachuting', 'vi', 'Parachute');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('winter_sports', 'en', 'Winter Sports');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('winter_sports', 'fr', 'Sport d\'hiver');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('winter_sports', 'vi', 'Winter Sports');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('skiing', 'en', 'Ski');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('skiing', 'fr', 'Ski');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('skiing', 'vi', 'Ski');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('biathlon', 'en', 'Biathlon');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('biathlon', 'fr', 'Biathlon');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('biathlon', 'vi', 'Biathlon');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('curling', 'en', 'Curling');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('curling', 'fr', 'Curling');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('curling', 'vi', 'Curling');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('hockey', 'en', 'Hockey');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('hockey', 'fr', 'Hockey');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('hockey', 'vi', 'Hockey');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ice_skating', 'en', 'Ice Skating');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ice_skating', 'fr', 'Patins à glace');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ice_skating', 'vi', 'Ice Skating');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('aquatic_sports', 'en', 'Aquatic Sports');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('aquatic_sports', 'fr', 'Sport d\'eau');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('aquatic_sports', 'vi', 'Aquatic Sports');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('swimming', 'en', 'Swimming');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('swimming', 'fr', 'Nage');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('swimming', 'vi', 'Swimming');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('diving', 'en', 'Diving');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('diving', 'fr', 'Plongée sous-marine');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('diving', 'vi', 'Diving');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('scuba_diving', 'en', 'Scuba Diving');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('scuba_diving', 'fr', 'Plongée (masque/tuba)');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('scuba_diving', 'vi', 'Scuba Diving');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('synchronized_swimming', 'en', 'Synchronized Swimming');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('synchronized_swimming', 'fr', 'Nage synchronisée');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('synchronized_swimming', 'vi', 'Synchronized Swimming');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('canoeing_kayaking', 'en', 'Canoeing-Kayaking');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('canoeing_kayaking', 'fr', 'Canoë-kayak');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('canoeing_kayaking', 'vi', 'Canoeing-Kayaking');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('water_polo', 'en', 'Water Polo');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('water_polo', 'fr', 'Water Polo');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('water_polo', 'vi', 'Water Polo');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('rafting', 'en', 'Rafting');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('rafting', 'fr', 'Rafting');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('rafting', 'vi', 'Rafting');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('sailing', 'en', 'Sailing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('sailing', 'fr', 'Voile');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('sailing', 'vi', 'Sailing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('surfing', 'en', 'Surfing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('surfing', 'fr', 'Surf');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('surfing', 'vi', 'Surfing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('water_skiing', 'en', 'Water Skiing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('water_skiing', 'fr', 'Ski Nautique');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('water_skiing', 'vi', 'Water Skiing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('athletics', 'en', 'Athletics');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('athletics', 'fr', 'Athlétisme');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('athletics', 'vi', 'Athletics');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('running', 'en', 'Running');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('running', 'fr', 'Course à pied');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('running', 'vi', 'running');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('triathlon', 'en', 'Triathlon');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('triathlon', 'fr', 'Triathlon');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('triathlon', 'vi', 'Triathlon');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('martial_arts', 'en', 'Martial Arts');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('martial_arts', 'fr', 'Arts Martiaux');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('martial_arts', 'vi', 'Martial Arts');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('arm_wrestling', 'en', 'Arm Wrestling');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('arm_wrestling', 'fr', 'Bras-de-fer');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('arm_wrestling', 'vi', 'Arm Wrestling');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('boxing', 'en', 'Boxing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('boxing', 'fr', 'Boxe');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('boxing', 'vi', 'Boxing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fencing', 'en', 'Fencing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fencing', 'fr', 'Escrime');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fencing', 'vi', 'Fencing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('judo', 'en', 'Judo');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('judo', 'fr', 'Judo');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('judo', 'vi', 'Judo');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('jujitsu', 'en', 'Ju-Jitsu');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('jujitsu', 'fr', 'Ju-Jitsu');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('jujitsu', 'vi', 'Ju-Jitsu');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('karate', 'en', 'Karate');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('karate', 'fr', 'Karate');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('karate', 'vi', 'Karate');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kendo', 'en', 'Kendo');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kendo', 'fr', 'Kendo');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kendo', 'vi', 'Kendo');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kickboxing', 'en', 'Kickboxing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kickboxing', 'fr', 'Kickboxing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kickboxing', 'vi', 'Kickboxing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('muaythai', 'en', 'Muay Thai');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('muaythai', 'fr', 'Muay Thai');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('muaythai', 'vi', 'Muay Thai');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kungfu', 'en', 'Kung Fu');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kungfu', 'fr', 'Kung Fu');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('kungfu', 'vi', 'Kung Fu');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('mixed_martial_arts', 'en', 'Mixed Martial Arts');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('mixed_martial_arts', 'fr', 'Arts Martiaux Mixtes');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('mixed_martial_arts', 'vi', 'Mixed Martial Arts');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('wrestling', 'en', 'Wrestling');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('wrestling', 'fr', 'Catch');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('wrestling', 'vi', 'wrestling');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('art_sports', 'en', 'Art Sports');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('art_sports', 'fr', 'Sport artistique');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('art_sports', 'vi', 'Art Sports');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('dance', 'en', 'Dance');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('dance', 'fr', 'Danse');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('dance', 'vi', 'Dance');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ball_sports', 'en', 'Ball Sports');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ball_sports', 'fr', 'Sports d\'équipe');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ball_sports', 'vi', 'Ball sport');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('baseball', 'en', 'Baseball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('baseball', 'fr', 'Baseball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('baseball', 'vi', 'Baseball');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('basketball', 'en', 'Basketball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('basketball', 'fr', 'Basketball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('basketball', 'vi', 'Basketball');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('beach_soccer', 'en', 'Beach Soccer');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('beach_soccer', 'fr', 'Beach Soccer');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('beach_soccer', 'vi', 'Beach Soccer');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('cricket', 'en', 'Cricket');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('cricket', 'fr', 'Cricket');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('cricket', 'vi', 'Cricket');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('foosball', 'en', 'Foosball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('foosball', 'fr', 'Foosball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('foosball', 'vi', 'Foosball');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('football', 'en', 'Football');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('football', 'fr', 'Football');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('football', 'vi', 'Football');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('american_football', 'en', 'American Football');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('american_football', 'fr', 'Football Americain');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('american_football', 'vi', 'American Football');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('handball', 'en', 'Handball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('handball', 'fr', 'Handball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('handball', 'vi', 'Handball');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('rugby', 'en', 'Rugby');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('rugby', 'fr', 'Rugby');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('rugby', 'vi', 'Rugby');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('dodgeball', 'en', 'Dodgeball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('dodgeball', 'fr', 'Dodgeball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('dodgeball', 'vi', 'Dodgeball');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('volleyball', 'en', 'Volleyball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('volleyball', 'fr', 'Volleyball');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('volleyball', 'vi', 'Volleyball');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('golf', 'en', 'Golf');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('golf', 'fr', 'Golf');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('golf', 'vi', 'Golf');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('miniature_golf', 'en', 'Miniature Golf');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('miniature_golf', 'fr', 'Golf Miniature');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('miniature_golf', 'vi', 'Miniature Golf');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('accuracy_sports', 'en', 'Accuracy Sports');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('accuracy_sports', 'fr', 'Sport de précision');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('accuracy_sports', 'vi', 'Accuracy Sports');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('archery', 'en', 'Archery');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('archery', 'fr', 'Tir à l\'arc');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('archery', 'vi', 'Archery');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('shooting', 'en', 'Shooting');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('shooting', 'fr', 'Tir');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('shooting', 'vi', 'Shooting');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('billard', 'en', 'Billard (pool)');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('billard', 'fr', 'Billard');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('billard', 'vi', 'Billard');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('darts', 'en', 'Darts ');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('darts', 'fr', 'Fléchettes');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('darts', 'vi', 'Darts');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('bowling', 'en', 'Bowling');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('bowling', 'fr', 'Bowling');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('bowling', 'vi', 'Bowling');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('outdoor', 'en', 'Outdoor Sports');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('outdoor', 'fr', 'Sport d\'exterieur');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('outdoor', 'vi', 'Outdoor Sports');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('climbing', 'en', 'Climbing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('climbing', 'fr', 'Escalade');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('climbing', 'vi', 'Climbing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('parkour', 'en', 'Parkour');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('parkour', 'fr', 'Parkour');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('parkour', 'vi', 'Parkour');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('mountain_running', 'en', 'Mountain Running');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('mountain_running', 'fr', 'Course en Montagne');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('mountain_running', 'vi', 'Mountain Running');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fishing', 'en', 'Fishing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fishing', 'fr', 'Pêche');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fishing', 'vi', 'Fishing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ride', 'en', 'Ride');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ride', 'fr', 'Ride');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('ride', 'vi', 'Ride');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('skateboard', 'en', 'Skateboarding');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('skateboard', 'fr', 'Skate');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('skateboard', 'vi', 'Skateboarding');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('roller_skate', 'en', 'Roller Skating');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('roller_skate', 'fr', 'Roller');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('roller_skate', 'vi', 'Roller Skating');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('racket_sport', 'en', 'Racket Sports');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('racket_sport', 'fr', 'Sport de raquettes');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('racket_sport', 'vi', 'Racket Sports');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('badminton', 'en', 'Badminton');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('badminton', 'fr', 'Badminton');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('badminton', 'vi', 'Badminton');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('tennis', 'en', 'Tennis');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('tennis', 'fr', 'Tennis');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('tennis', 'vi', 'Tennis');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('squash', 'en', 'Squash');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('squash', 'fr', 'Squash');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('squash', 'vi', 'Squash');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_tennis', 'en', 'Table Tennis');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_tennis', 'fr', 'Tennis de table');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_tennis', 'vi', 'Table tennis');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('racing', 'en', 'Racing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('racing', 'fr', 'Course');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('racing', 'vi', 'Racing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('horse_racing', 'en', 'Horse Racing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('horse_racing', 'fr', 'Course à Cheval');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('horse_racing', 'vi', 'Horse Racing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('car_racing', 'en', 'Car Racing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('car_racing', 'fr', 'Course Voiture');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('car_racing', 'vi', 'Car Racing');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('motorcycle_racing', 'en', 'Motorcycle Racing');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('motorcycle_racing', 'fr', 'Course Moto');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('motorcycle_racing', 'vi', 'Motorcycle');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('cycling', 'en', 'Cycling');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('cycling', 'fr', 'Cyclisme');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('cycling', 'vi', 'Cycling');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('pub_games', 'en', 'Pub Games');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('pub_games', 'fr', 'Jeu de bars');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('pub_games', 'vi', 'Pub Games');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_hockey', 'en', 'Table Hockey');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_hockey', 'fr', 'Table de Hockey');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_hockey', 'vi', 'Table Hockey');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_soccer', 'en', 'Table Soccer');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_soccer', 'fr', 'Babyfoot');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('table_soccer', 'vi', 'Table Soccer');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('board_games', 'en', 'Board Games');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('board_games', 'fr', 'Jeu de plateaux');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('board_games', 'vi', 'Board Games');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('chess', 'en', 'Chess');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('chess', 'fr', 'Echec');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('chess', 'vi', 'Chess');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('go', 'en', 'Go');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('go', 'fr', 'Go');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('go', 'vi', 'Go');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fitness', 'en', 'Fitness');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fitness', 'fr', 'Fitness');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('fitness', 'vi', 'Fitness');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('body_building', 'en', 'Body Building');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('body_building', 'fr', 'Body Building');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('body_building', 'vi', 'Body Building');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('power_lifting', 'en', 'Power Lifting');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('power_lifting', 'fr', 'Power Lifting');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('power_lifting', 'vi', 'Power Lifting');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('yoga', 'en', 'Yoga');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('yoga', 'fr', 'Yoga');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('yoga', 'vi', 'Yoga');

-- air_sports
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('gymnastics', 'en', 'Gymnastics');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('gymnastics', 'fr', 'Gymnatique');
INSERT INTO i18n_categories VALUES(id, language_id, label) VALUES('gymnastics', 'vi', 'Gymnastics');
