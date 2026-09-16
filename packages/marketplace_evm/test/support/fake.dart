/// Fakes fail loudly when an interaction was not configured by a test.
class Fake {
  @override
  dynamic noSuchMethod(Invocation invocation) => throw UnimplementedError(
    'Unconfigured fake member: ${invocation.memberName}',
  );
}
