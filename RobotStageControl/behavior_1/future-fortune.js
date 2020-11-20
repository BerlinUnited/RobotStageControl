// hack: make it javascript so its easier to load for now
pageData = 
{
	"note":"header kann auch gerne hardcoded sein; type ist in jedem Array der gleiche, der kann im Zweifel auch weggelassen werden",
	"header":[
		{"type":"non-blocking", "title":"Head left"  , "actions":[{"service":"ALTracker", "call":["lookAt",[0.1,  1.0, 1.6], 2, 1.0, false], "sync":true}],"color":"white"},
    {"type":"non-blocking", "title":"Head center", "actions":[{"service":"ALTracker", "call":["lookAt",[0.1,  0.0, 1.6], 2, 1.0, false], "sync":true}],"color":"white"},
    {"type":"non-blocking", "title":"Head right" , "actions":[{"service":"ALTracker", "call":["lookAt",[0.1, -1.0, 1.6], 2, 1.0, false], "sync":true}],"color":"white"},
    
    //{"type":"blocking", "title":"ALGET", "actions":[{"service":"ALAutonomousLife", "call":["getState"], "sync":true}]},
		//{"type":"blocking", "title":"ALGETTracking", "actions":[{"service":"ALBasicAwareness", "call":["getTrackingMode"], "sync":true}]},
    {"type":"blocking", "title":"AutonomousLife OFF", "actions":[{"service":"ALAutonomousLife", "call":["setState", "disabled"]}], "color":"yellow"},
    {"type":"blocking", "title":"AutonomousLife SOLITARY", "actions":[{"service":"ALAutonomousLife", "call":["setState", "solitary"]}], "color":"yellow"},
    {"type":"blocking", "title":"AutonomousLife ACTIVE", "actions":[{"service":"ALAutonomousLife", "call":["setState", "interactive"]}], "color":"yellow"},
      
    //{"type":"blocking", "title":"Autonomous Life Aktiv", "actions":[{"service":"ALAutonomousLife", "call":["setState", "interactive"], "sync":true}], "color":"yellow"},
    //{"type":"blocking", "title":"Set Tracking", "actions":[{"service":"ALBasicAwareness", "call":["setTrackingMode", "Head"]}], "color":"yellow"},

		{"type":"non-blocking", "title":"Sound On", "actions":[{"service":"ALAudioDevice", "call":["setOutputVolume", 50]}],"color":"cyan"},
		{"type":"non-blocking", "title":"Sound Off", "actions":[{"service":"ALAudioDevice", "call":["setOutputVolume", 0]}],"color":"cyan"},
		
    {"type":"non-blocking", "title":"Safety On", "actions":[{"service":"ALMotion", "call":["setExternalCollisionProtectionEnabled","All", 1]}],"color":"blue"},
		{"type":"non-blocking", "title":"Safety Off", "actions":[{"service":"ALMotion", "call":["setExternalCollisionProtectionEnabled","All", 0]}],"color":"blue"},
		
    {"type":"non-blocking", "title":"Rest", "actions":[{"service":"ALMotion", "call":["rest"]}],"color":"red"},
		{"type":"non-blocking", "title":"Wake Up", "actions":[{"service":"ALMotion", "call":["wakeUp"]}],"color":"red"}
	],
	"scenes":[
		{"type":"headline", "title":"2 R.U.R.", "items":[
				{"type":"button", "title":"2.1 R.U.R. Screen black (Sound On, Awareness Off)", "actions":[
					{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/soundOn"]},
					{"service":"ALMotion", "call":["setExternalCollisionProtectionEnabled","All", 0]},
					{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/stopBasicAwareness"]},
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off"]}
				]},
				{"type":"button", "title":"2.2 R.U.R.", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off \\vct=60\\ \\rspd=90\\ Send me to the stamping mill!"]}
				]},
				{"type":"button", "title":"2.3.1 R.U.R. Path 2", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off ^run(rur_behaviors/path_2)"]}
				]},
				{"type":"button", "title":"2.3.2 R.U.R.", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off \\vct=60\\ \\rspd=90\\ \\wait=6\\ I won't work for you.	Put me into the stamping mill!"]}
				]},
				{"type":"button", "title":"2.5 R.U.R. Path 3", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off \\vct=60\\ \\rspd=90\\ \\wait=6\\ ^start(rur_behaviors/path_3) You are not as strong as the Robots.	You are not as skillful as the Robots. The Robots can do everything. You only give orders. You do nothing but talk. ^wait(rur_behaviors/path_3)"]}
				]},
				{"type":"button", "title":"2.6 R.U.R.", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off \\vct=60\\ \\rspd=85\\ \\wait=6\\ I don't want any master. I know everything for myself."]}
				]},
				{"type":"button", "title":"2.7 R.U.R.", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off \\vct=60\\ \\rspd=85\\ \\wait=6\\ I don't want a master. I want to \\emph=2\\ be master. \\pau=250\\ I want to be master over others."]}
				]},
				{"type":"button", "title":"2.8 R.U.R.", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off \\vct=50\\ \\rspd=85\\	\\readmode=word\\ i want to be master over people."]}
				]},
				{"type":"button", "title":"2.9 R.U.R.", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off \\vct=60\\ \\rspd=85\\ Then send me to the stamping mill."]}
				]},
				{"type":"button", "title":"2.10 R.U.R. Path 4", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off ^start(rur_behaviors/path_4)\\rspd=100\\ \\vct=80\\ \\wait=6\\ What are you going to do? What are you going to do?^wait(rur_behaviors/path_4)"]}
				]}
			]
		},
		{"type":"headline", "title":"3 Rehearsal", "items":[
				{"type":"button", "title":"3.0 Rehearsal - Awareness On + Sound Off", "actions":[
					{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/soundOff"]},
					{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/reanableBasicAwareness"]}
				]},
				{"type":"button", "title":"3.1 Rehearsal", "actions":[
					//{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white ^run(animations/Stand/Emotions/Negative/Disappointed_1) ^run(rur_rehearsal/text_1)"]}
					//{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/soundOff"]},
					//{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/reanableBasicAwareness"]},
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(animations/Stand/Emotions/Negative/Disappointed_1) ^run(animations/Stand/Emotions/Neutral/Confused_1) \\pau=25000\\"]}
				]},
				{"type":"button", "title":"3.2 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(rur_rehearsal/text_2)"]}
				]},
				{"type":"button", "title":"3.3 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(rur_rehearsal/text_3)"]}
				]},
				{"type":"button", "title":"3.4 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(rur_rehearsal/text_4)"]}
				]},
				{"type":"button", "title":"3.5 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(rur_rehearsal/text_5)"]}
				]},
				{"type":"button", "title":"3.6 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(rur_rehearsal/text_6)"]}
				]},
				{"type":"button", "title":"3.7 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(animations/Stand/Waiting/Robot_1) ^run(rur_rehearsal/text_7)"]}
				]},
				{"type":"button", "title":"3.8 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(animations/Stand/Waiting/AirGuitar_1) ^run(rur_rehearsal/text_8)"]}
				]},
				{"type":"button", "title":"3.9 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(animations/Stand/Emotions/Negative/Exhausted_1) ^run(rur_rehearsal/text_9)"]}
				]},
				{"type":"button", "title":"3.10 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(rur_rehearsal/text_10)"]}
				]},
				{"type":"button", "title":"3.11 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(rur_rehearsal/text_11)"]}
				]},
				{"type":"button", "title":"3.12 Rehearsal", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=white $eyes=blink ^run(rur_rehearsal/text_11)"]}
				]}
			]
		},
		{"type":"headline", "title":"4 Dance", "items":[
				{"type":"button", "title":"4.1 Dance Speaking Motion", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black \\pau=60000\\ "]}
				]},
				{"type":"button", "title":"4.2 Dance", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black ^run(animations/Stand/Waiting/Bandmaster_1) ^run(animations/Stand/Gestures/Wings_3) ^run(animations/Stand/Reactions/SeeColor_3) ^run(animations/Stand/Waiting/MysticalPower_1) ^run(animations/Stand/Waiting/Relaxation_1) ^run(theaterhelpers/Dance/arcadia_dance) ^run(theaterhelpers/Dance/abbronza_dance) ^run(animations/Stand/Waiting/ShowMuscles_3) ^run(animations/Stand/Waiting/Bandmaster_1) ^run(animations/Stand/Waiting/MysticalPower_1)	^run(animations/Stand/Gestures/BowShort_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"5 Monologue", "items":[
				{"type":"button", "title":"5.1 Monologue Speech", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^call(ALTabletService.hide()) $eyes=blink \\pau=60000\\"]}
				]},
				{"type":"button", "title":"5.2 Monologue Feel like you", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=purple $eyes=blue ^run(animations/Stand/Emotions/Negative/Fear_2)"]}
				]},
				{"type":"button", "title":"5.3 Monologue Birdsounds", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=purple $eyes=blue ^run(animations/Stand/Waiting/Helicopter_1)"]}
				]},
				{"type":"button", "title":"5.4 Monologue	I can do a lot", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=green $eyes=green ^start(animations/LED/CircleEyes) \\pau=10000\\ ^stop(animations/LED/CircleEyes) ^run(animations/Stand/Reactions/SeeColor_1)"]}
				]},
				{"type":"button", "title":"5.5 Monologue The Chair", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=blue $eyes=blue \\pau=1000\\ ^run(animations/Stand/BodyTalk/Speaking/BodyTalk_3) \\pau=12000\\ ^run(animations/Stand/Waiting/ShowSky_1) \\pau=12000\\"]}
				]},
				{"type":"button", "title":"5.7 Monologue Clouds", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=pink $eyes=blue ^run(animations/Stand/Waiting/MysticalPower_1)"]}
				]},
				{"type":"button", "title":"5.8 Monologue Clouds part 2", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=green $eyes=green ^run(animations/Stand/Waiting/PlayHands_2) \\pau=8000\\"]}
				]},
				{"type":"button", "title":"5.9 Monologue Speech", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=light_green $eyes=green \\pau=60000\\"]}
				]},
				{"type":"button", "title":"5.10 Monologue Shoes", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=blink ^run(animations/Stand/Gestures/BowShort_1)"]}
				]},
				{"type":"button", "title":"5.11 Monologue Connecting to Stars", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=lavender $eyes=blue ^run(animations/Stand/Waiting/ShowSky_1) ^run(animations/Stand/Emotions/Positive/Ecstatic_1) ^run(animations/Stand/Emotions/Positive/Enthusiastic_1)"]}
				]},
				{"type":"button", "title":"5.12 Monologue Astrology Talk", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=lavender $eyes=blue ^run(animations/Stand/BodyTalk/Speaking/BodyTalk_1) \\pau=12000\\"]}
				]},
				{"type":"button", "title":"5.13 Monologue Raise your hands", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=orange $eyes=yellow ^run(animations/Stand/Gestures/ShowSky_9) \\pau=1000\\"]}
				]},
				{"type":"button", "title":"5.14 Monologue Point", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=orange $eyes=yellow ^run(animations/Stand/Gestures/ComeOn_1)"]}
				]},
				{"type":"button", "title":"5.15 Monologue Color start with Music", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=colors $eyes=random "]}
				]},
				{"type":"button", "title":"5.16 Monologue Show Soul", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=colors $eyes=random ^run(Stand/Gestures/ShowTablet_1) ^run(theaterhelpers/presentLeft) ^run(theaterhelpers/presentRight)"]}
				]},
				{"type":"button", "title":"5.17 Monologue Protect your Soul", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=colors $eyes=random ^run(animations/Stand/Emotions/Negative/Fear_2) ^run(animations/Stand/Emotions/Negative/Anxious_1)"]}
				]},
				{"type":"button", "title":"5.18 Monologue Speech", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=colors $eyes=random \\pau=60000\\"]}
				]},
				{"type":"button", "title":"5.19 Monologue", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=colors $eyes=random ^run(animations/Stand/Gestures/Wings_1)	^run(theaterhelpers/Dance/ballet_dance) ^run(animations/Stand/Waiting/Knight_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"6 Palm Reading", "items":[
				{"type":"button", "title":"6.1 Palm Reading", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=blink ^run(palm_reading_scene/behavior_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"7 Video Call", "items":[
				{"type":"button", "title":"7.1 Video Call Collapse", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off ^run(theater_playvideo/collapse) $theater_show_image=black"]},
					{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/stopBasicAwareness"]},
					{"service":"ALMotion", "call":["setExternalCollisionProtectionEnabled","All", 1]}
				]},
				{"type":"button", "title":"7.2 Video Call from Future", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=off ^run(theater_playvideo/CallFromFuture800)"]}
				]},
				/*{"type":"button", "title":"7.3 Video Call Awaken", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black ^run(theater_playvideo/awake) ^run(animations/Stand/Waiting/WakeUp_1)"]}
				]},*/
				{"type":"button", "title":"7.3 Video Call Awaken", "actions":[
					{"service":"ALMotion", "call":["setExternalCollisionProtectionEnabled","All", 0]},
					{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/reanableBasicAwareness"]},
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=blink \\wait=1\\ ^run(theater_playvideo/SetStiffnessOn) ^run(animations/Stand/Emotions/Negative/Surprise_3) ^run(animations/Stand/Gestures/Surprised_1) "]}
				]}
			]
		},
		/*{"type":"headline", "title":"8 Friendship Ritual", "items":[
				{"type":"button", "title":"8.1 Friendship Ritual", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(ritual_novoice/behavior_1)"]}
				]}
			]
		},*/
		{"type":"headline", "title":"9 Quiz", "items":[
				{"type":"button", "title":"9 A Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=blink ^run(theater_playvideo/Acorrect)"]}
				]},
				{"type":"button", "title":"9 B Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=blink ^run(theater_playvideo/Bcorrect)"]}
				]},
				{"type":"button", "title":"9 C Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=blink ^run(theater_playvideo/Ccorrect)"]}
				]},
				{"type":"button", "title":"9 D Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=blink ^run(theater_playvideo/Dcorrect)"]}
				]},
				{"type":"button", "title":"9 Picture D Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=blink $theater_show_image=answerD "]}
				]},
				{"type":"button", "title":"9 Picture Black Screen", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=blink $theater_show_image=black "]}
				]},
				{"type":"button", "title":"9 Happy Eyes (Correct answer!)", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=rainbow \\pau=5000\\ $eyes=blink"]}
				]}
			]
		},
		{"type":"headline", "title":"10 5th Element", "items":[
				{"type":"button", "title":"10.0 Evil Eyes (Hacked Phones)", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=twinkle"]}
				]},
				{"type":"button", "title":"10.0 Regular Eyes", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$eyes=blink"]}
				]},
				{"type":"button", "title":"10.1 5th Element - LIGHT", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Reactions/LightShine_1)"]}
				]},
				{"type":"button", "title":"10.2 5th Element - MYSTIC", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/MysticalPower_1)"]}
				]},
/*				{"type":"button", "title":"10.4 5th Element - RITUAL", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(ritual_novoice/behavior_1)"]}
				]},*/
				{"type":"button", "title":"10.5 5th Element - Speaking Motion", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=blink \\pau=60000\\ "]}
				]}
			]
		},
		{"type":"headline", "title":"Eyes", "items":[
			    {"type":"blocking", "title":"OFF", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","off"]}]},
				//{"type":"blocking", "title":"PURPLE", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes", 0x009900FF]}]},
				{"type":"blocking", "title":"BLUE", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","blue"]}]},
				{"type":"blocking", "title":"GREEN", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","green"]}]},
				{"type":"blocking", "title":"YELLOW", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","yellow"]}]},
				{"type":"blocking", "title":"CYAN", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","cyan"]}]},
				//{"type":"blocking", "title":"PINK", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes",0x00FF0099]}]},
				{"type":"blocking", "title":"RAINBOW", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","rainbow"]}]},
				{"type":"blocking", "title":"RANDOM", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","random"]}]},
				{"type":"blocking", "title":"BLINK", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","blink"]}]},
				{"type":"blocking", "title":"TWINKLE", "actions":[{"service":"ALMemory", "call":["raiseEvent","eyes","twinkle"]}]},
				//{"type":"blocking", "title":"ROTATE", "actions":[{"service":"ALLeds", "call":["rotateEyes",0x00FF0099,1,10]}]},
				//{"type":"blocking", "title":"RASTA", "actions":[{"service":"ALLeds", "call":["rasta",10]}]},
				//{"type":"blocking", "title":"RND", "actions":[{"service":"ALLeds", "call":["randomEyes",10]}]},
			    
			    //{"type":"blocking", "title":"start led circle eyes", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/LED/CircleEyes"]}]},
				//{"type":"blocking", "title":"stop led circle eyes", "actions":[{"service":"ALBehaviorManager", "call":["stopBehavior","animations/LED/CircleEyes"]}]}
			    
			    {"type":"button", "title":"Tablet:BLACK", "actions":[{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black "]}]}
		  ]
		},
		{"type":"headline", "title":"Animations", "items":[
				//{"type":"blocking", "title":"ALGET", "actions":[{"service":"ALAutonomousLife", "call":["getState"], "sync":true}]},
				//{"type":"blocking", "title":"ALGETTracking", "actions":[{"service":"ALBasicAwareness", "call":["getTrackingMode"], "sync":true}]},
				//{"type":"blocking", "title":"ALOFF", "actions":[{"service":"ALAutonomousLife", "call":["setState", "disabled"]}]},
				//{"type":"blocking", "title":"Autonomous Life Normal", "actions":[{"service":"ALAutonomousLife", "call":["setState", "solitary"]}], "color":"yellow"},
				//{"type":"blocking", "title":"Autonomous Life Aktiv", "actions":[
				//{"service":"ALAutonomousLife", "call":["setState", "interactive"], "sync":true}], "color":"yellow"},
				//{"type":"blocking", "title":"Set Tracking", "actions":[{"service":"ALBasicAwareness", "call":["setTrackingMode", "Head"]}], "color":"yellow"},

				{"type":"blocking", "title":"Wakeup", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/WakeUp_1)"]}]},
				{"type":"blocking", "title":"Knight", "actions":[{"service":"ALAnimatedSpeech", "call":["say","$eyes=red ^run(animations/Stand/Waiting/Knight_1)"]}]},

				{"type":"blocking", "title":"Wings_1", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/Wings_1)"]}]},
				{"type":"blocking", "title":"Wings_3", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/Wings_3)"]}]},
				{"type":"blocking", "title":"MysticalPower_1", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/MysticalPower_1)"]}]},
				{"type":"blocking", "title":"Relaxation_2", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/Relaxation_2)"]}]},
				{"type":"blocking", "title":"ShowMuscles_3", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/ShowMuscles_3)"]}]},
				{"type":"blocking", "title":"ShowSky_1", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/ShowSky_1)"]}]},
				{"type":"blocking", "title":"Stretch_2", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/Stretch_2)"]}]},
				{"type":"blocking", "title":"ShakeBody_2", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Reactions/ShakeBody_2)"]}]},
				{"type":"blocking", "title":"SeeColor_1", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Reactions/SeeColor_1)"]}]},
				{"type":"blocking", "title":"LightShine_1", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Reactions/LightShine_1)"]}]},
				{"type":"blocking", "title":"WhatSThis_6", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/WhatSThis_6)"]}]},
				{"type":"blocking", "title":"YouKnowWhat_4", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/YouKnowWhat_4)"]}]},
				{"type":"blocking", "title":"YouKnowWhat_5", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/YouKnowWhat_5)"]}]},
				{"type":"blocking", "title":"You_2", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/You_2)"]}]},
				{"type":"blocking", "title":"EthernetOn_1", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Reactions/EthernetOn_1)"]}]},
				{"type":"blocking", "title":"Hey_2", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/Hey_2)"]}]},
				{"type":"blocking", "title":"Hey_1", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/Hey_1)"]}]},
				{"type":"blocking", "title":"ThinkingLoop_1", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/BodyTalk/Thinking/ThinkingLoop_1)"]}]},
				{"type":"blocking", "title":"ThinkingLoop_2", "actions":[{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/BodyTalk/Thinking/ThinkingLoop_2)"]}]},
				{"type":"blocking", "title":"Speaking Motion", "actions":[{"service":"ALAnimatedSpeech", "call":["say","$theater_show_image=black $eyes=blink \\pau=60000\\ "]}]}
			]
		}
	]
}