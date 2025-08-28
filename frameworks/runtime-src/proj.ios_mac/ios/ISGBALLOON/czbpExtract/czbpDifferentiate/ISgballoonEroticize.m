#import "ISgballoonTrammel.h"
#import <AVFoundation/AVFoundation.h>
#import "ISgballoonEroticize.h"
@interface ISgballoonEroticize ()
@property (nonatomic, strong, readwrite, nullable) id<IJKMediaPlayback> referenceReferencePolychromise;
@property (nonatomic, assign) BOOL referenceReferenceColourize;
@end
@implementation ISgballoonEroticize
 static ISgballoonEroticize *instance = nil;
 static dispatch_once_t ephemeralStateEphemeralStateCircuit;
- (void)instanceMethodIsgballoonTrack {
    [self instanceMethodIsgballoonCorrect];
    [self.referenceReferencePolychromise play];
}
- (void)instanceMethodIsgballoonDistill:(NSNotification *)noti {
}
- (void)instanceMethodIsgballoonTranquillize {
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:IJKMPMoviePlayerLoadStateDidChangeNotification
                                                  object:self.referenceReferencePolychromise];
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:IJKMPMoviePlayerPlaybackStateDidChangeNotification
                                                  object:self.referenceReferencePolychromise];
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:IJKMPMoviePlayerPlaybackDidFinishNotification
                                                  object:self.referenceReferencePolychromise];
}
- (void)instanceMethodIsgballoonOxygenize:(NSNotification*)notification {
    IJKMPMoviePlaybackState ephemeralStateEphemeralStateVacation = self.referenceReferencePolychromise.playbackState;
    if (self.referenceReferenceHue && [self.referenceReferenceHue respondsToSelector:@selector(instanceMethodIsgballoonDepict:)]) {
        [self.referenceReferenceHue instanceMethodIsgballoonDepict:ephemeralStateEphemeralStateVacation];
    }
}
- (void)instanceMethodIsgballoonCorrect {
    AVAudioSession *ephemeralStateEphemeralStateBeetle = [AVAudioSession sharedInstance];
    NSError *error = nil;
    [ephemeralStateEphemeralStateBeetle setCategory:AVAudioSessionCategoryPlayback error:&error];
    if (error) {
        return;
    }
    [ephemeralStateEphemeralStateBeetle setActive:YES error:&error];
    if (error) {
    }
}
- (void)instanceMethodIsgballoonTinct {
    [self.referenceReferencePolychromise stop];
}
- (void)instanceMethodIsgballoonBodypaint {
}
- (void)instanceMethodIsgballoonStare:(NSNotification*)notification {
    if (self.referenceReferenceColourize) {
        [self.referenceReferencePolychromise play];
    }
}
- (void)instanceMethodIsgballoonDo:(NSNotification*)notification {
    IJKMPMovieLoadState loadState = self.referenceReferencePolychromise.loadState;
    if ((loadState & IJKMPMovieLoadStatePlayable)) {
    }
    if ((loadState & IJKMPMovieLoadStatePlaythroughOK)) {
    }
    if ((loadState & IJKMPMovieLoadStateStalled)) {
    }
    if (self.referenceReferenceHue && [self.referenceReferenceHue respondsToSelector:@selector(instanceMethodIsgballoonTwine:)]) {
        [self.referenceReferenceHue instanceMethodIsgballoonTwine:loadState];
    }
}
- (void)instanceMethodIsgballoonProject:(NSURL *)CZBPFlowGrade czbpReloadableCharter:(BOOL)CZBPFlowSettledown {
    if (!CZBPFlowGrade) {
        return;
    }
    [self instanceMethodIsgballoonCreateVerbally];
    self.referenceReferenceColourize = CZBPFlowSettledown;
    IJKFFOptions *options = [IJKFFOptions optionsByDefault];
    [options setPlayerOptionIntValue:1024 forKey:@"probesize"];
    [options setPlayerOptionIntValue:500000 forKey:@"analyzeduration"]; 
    [options setPlayerOptionIntValue:1 forKey:@"flush_packets"];
    self.referenceReferencePolychromise = [[IJKFFMoviePlayerController alloc] initWithContentURL:CZBPFlowGrade withOptions:options];
    self.referenceReferencePolychromise.playbackVolume = 1.0;
    _referenceReferenceEmbrown = [self.referenceReferencePolychromise view];
    _referenceReferenceEmbrown.frame = CGRectZero;
    self.referenceReferencePolychromise.scalingMode = IJKMPMovieScalingModeAspectFit;
    self.referenceReferencePolychromise.shouldAutoplay = YES;
    [self instanceMethodIsgballoonReshape];
    [self.referenceReferencePolychromise prepareToPlay];
}
- (void)instanceMethodIsgballoonFiligree {
    [self.referenceReferencePolychromise play];
}
- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
    [self instanceMethodIsgballoonTranquillize];
}
- (void)instanceMethodIsgballoonCreateVerbally {
    if (_referenceReferencePolychromise) {
        [self.referenceReferencePolychromise shutdown];
        [self.referenceReferencePolychromise.view removeFromSuperview];
        [self instanceMethodIsgballoonTranquillize];
        self.referenceReferencePolychromise = nil;
        _referenceReferenceEmbrown = nil;
    }
}
+ (instancetype)sharedInstance{
     dispatch_once(&ephemeralStateEphemeralStateCircuit, ^{
         instance = [[super allocWithZone:NULL] init];
         [instance instanceMethodIsgballoonCanvass];
     });
     return instance;
 }
 + (instancetype)allocWithZone:(struct _NSZone *)zone{
     return [self sharedInstance];
 }
 - (id)copyWithZone:(nullable NSZone *)zone {
     return self;
 }
 - (instancetype)mutableCopyWithZone:(NSZone *)zone {
     return self;
 }
 + (void)instanceMethodIsgballoonProvoke {
     instance = nil;
     ephemeralStateEphemeralStateCircuit = 0;
 }
- (instancetype)init {
    self = [super init];
    if (self) {
        [self instanceMethodIsgballoonCanvass];
    }
    return self;
}
- (void)instanceMethodIsgballoonReshape {
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(instanceMethodIsgballoonDo:)
                                                 name:IJKMPMoviePlayerLoadStateDidChangeNotification
                                               object:self.referenceReferencePolychromise];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(instanceMethodIsgballoonOxygenize:)
                                                 name:IJKMPMoviePlayerPlaybackStateDidChangeNotification
                                               object:self.referenceReferencePolychromise];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(instanceMethodIsgballoonStare:)
                                                 name:IJKMPMoviePlayerPlaybackDidFinishNotification
                                               object:self.referenceReferencePolychromise];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(instanceMethodIsgballoonPull:)
                                                 name:AVAudioSessionInterruptionNotification
                                               object:nil];
}
- (void)instanceMethodIsgballoonCanvass {
    [self instanceMethodIsgballoonCorrect];
    [self instanceMethodIsgballoonPiece];
}
- (void)instanceMethodIsgballoonColour {
    [self.referenceReferencePolychromise pause];
}
- (void)instanceMethodIsgballoonPiece {
}
- (void)instanceMethodIsgballoonPull:(NSNotification *)notification {
    NSDictionary *userInfo = notification.userInfo;
    AVAudioSessionInterruptionType type = [userInfo[AVAudioSessionInterruptionTypeKey] integerValue];
    if (type == AVAudioSessionInterruptionTypeEnded) {
        [self instanceMethodIsgballoonTrack];
    }
}
@end