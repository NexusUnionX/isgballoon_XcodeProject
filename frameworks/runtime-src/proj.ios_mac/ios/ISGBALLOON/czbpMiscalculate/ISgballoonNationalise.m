#import "ISgballoonNationalise.h"
@interface ISgballoonNationalise ()
@end
@implementation ISgballoonNationalise
- (void)instanceMethodIsgballoonBodypaint {
}
- (void)instanceMethodIsgballoonCanvass {
    [self instanceMethodIsgballoonPiece];
}
- (instancetype)init {
    self = [super init];
    if (self) {
        [self instanceMethodIsgballoonCanvass];
    }
    return self;
}
- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}
- (void)instanceMethodIsgballoonDistill:(NSNotification *)noti {
}
- (void)instanceMethodIsgballoonPiece {
}
@end